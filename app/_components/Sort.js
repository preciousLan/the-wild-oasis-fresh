'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Sort = () => {
	const searchParams = useSearchParams();
	const Pathname = usePathname();
	const router = useRouter();

	const isActive = searchParams.get('sortBy') || '';

	function handleSort(value) {
		const params = new URLSearchParams(searchParams);
		params.set('sortBy', value);

		router.replace(`${Pathname}?${params.toString()}`);
	}

	return (
		<div className='mb-5 border'>
			<button
				className={`px-5 py-2 ${
					isActive === 'price-asc'
						? 'bg-red-500'
						: ' hover:bg-amber-200 hover:text-foreground'
				}`}
				onClick={() => handleSort('price-asc')}>
				price-asc
			</button>
			<button
				className={`px-5 py-2 ${
					isActive === 'price-desc'
						? 'bg-red-500'
						: ' hover:bg-amber-200 hover:text-foreground'
				}`}
				onClick={() => handleSort('price-desc')}>
				price-desc
			</button>
			<button
				className={`px-5 py-2 ${
					isActive === 'name-asc'
						? 'bg-red-500'
						: ' hover:bg-amber-200 hover:text-foreground'
				}`}
				onClick={() => handleSort('name-asc')}>
				name-asc
			</button>
			<button
				className={`px-5 py-2 ${
					isActive === 'name-desc'
						? 'bg-red-500'
						: ' hover:bg-amber-200 hover:text-foreground'
				}`}
				onClick={() => handleSort('name-desc')}>
				name-desc
			</button>
		</div>
	);
};

export default Sort;
