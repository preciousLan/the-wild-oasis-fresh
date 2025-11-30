'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import React from 'react';

export const Filter = () => {
	const searchParams = useSearchParams();

	const router = useRouter();
	const Pathname = usePathname();

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams);

		params.set('capacity', filter);

		router.replace(`${Pathname}?${params.toString()}`);
	}

	const isActive = searchParams.get('capacity') || '';

	return (
		<div className='border border-background '>
			<Button filter='all' isActive={isActive} handleFilter={handleFilter}>
				All Cabins
			</Button>
			<Button filter='small' isActive={isActive} handleFilter={handleFilter}>
				1&mdash;3 guests
			</Button>
			<Button filter='medium' isActive={isActive} handleFilter={handleFilter}>
				4&mdash;7 guests
			</Button>

			<Button filter='large' isActive={isActive} handleFilter={handleFilter}>
				8&mdash;12 guests
			</Button>
		</div>
	);
};

function Button({ children, filter, isActive, handleFilter }) {
	return (
		<button
			className={`px-5 py-2 ${
				isActive === filter
					? 'bg-red-200'
					: ' hover:bg-gray-600 hover:text-foreground'
			}`}
			onClick={() => handleFilter(filter)}>
			{children}
		</button>
	);
}
