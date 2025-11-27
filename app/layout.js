import '@/app/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
import { ReservationProvider } from './_components/ReservationContext';

const josefin = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: { template: '%s: The wild Oasis', default: 'welcome/ the wild oasis' },
	description: 'best bookings for you',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<div
					className={`bg-gray-800 w-full min-h-screen ${josefin.className} flex flex-col antialiased`}>
					<Header />
					<div className='flex-1 px-8 py-12 h-screen'>
						<main className=' max-w-7xl  mx-auto w-full  '>
							<ReservationProvider>{children}</ReservationProvider>
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
