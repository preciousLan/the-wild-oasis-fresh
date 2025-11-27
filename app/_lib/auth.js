import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from './data-service';

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	callbacks: {
		//decide whether the user is allowed to access that page or API route
		authorized({ auth, request }) {
			return !!auth?.user;
		},
		//signIn runs right after a successful Google login
		//side database tasks like creating a user
		async signIn({ user, account, profile }) {
			try {
				const existingGuest = await getGuest(user.email);

				if (!existingGuest)
					await createGuest({ email: user.email, fullName: user.name });

				return true;
			} catch {
				return false;
			}
		},
		//lets you customize what data user gets.
		async session({ session, user }) {
			const guest = await getGuest(session.user.email);
			session.user.guestId = guest.id;
			return session;
		},
	},
	//“If a user needs to log in, send them to
	//  /login instead of the default NextAuth login page.”
	pages: {
		signIn: '/login',
	},
});

// const authConfig = {
//     providers:[
//         Google({
//             clientId: process.env.AUTH_GOOGLE_ID,
//             clientSecret: process.env.AUTH_GOOGLE_SECRET,
//         })
//     ]}

//     export const {auth, handlers:{GET,POST}} = NextAuth(authConfig)
