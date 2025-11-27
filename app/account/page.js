import Link from 'next/link';
import React from 'react';
import { auth } from '../_lib/auth';

export const metadata = {
	title: 'Account',
};

const page = async () => {
	const session = await auth();
	console.log(session)
	const firstName = session.user.name.split(' ')[0];

	return (
		<div className='text-background'>
			<h2 className='font-semibold text-2xl  mb-7 text-amber-400'>
				welcome {firstName}
			</h2>
		</div>
	);
};

export default page;
