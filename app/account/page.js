import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<div className='text-background'>
			<h2 className='font-semibold text-2xl  mb-7'>welcome lanrey</h2>
			<Link
				href='/account/reservations'
				className='p-3 bg-red-200 text-foreground'>
				go to reservations
			</Link>
		</div>
	);
};

export default page;
