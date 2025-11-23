import React from 'react';
import CabinCard from './CabinCard';
import { getCabins } from '../_lib/data-service';
import { Filter } from './Filter';
import Sort from './Sort';

export default async function CabinList({ filter, sort }) {
	const cabins = await getCabins();
	if (!cabins.length) return null;

	let filteredValue;
	if (filter === 'all') filteredValue = cabins;
	if (filter === 'small')
		filteredValue = cabins.filter((cabin) => cabin.maxCapacity <= 3);
	if (filter === 'medium')
		filteredValue = cabins.filter(
			(cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
		);
	if (filter === 'large')
		filteredValue = cabins.filter((cabin) => cabin.maxCapacity >= 8);

	// STEP 2: SORT 
	
	let sortedValue = [...filteredValue];

	if (sort === 'price-asc') {
		sortedValue.sort((a, b) => a.regularPrice - b.regularPrice);
	}

	if (sort === 'price-desc') {
		sortedValue.sort((a, b) => b.regularPrice - a.regularPrice);
	}

	if (sort === 'name-asc') {
		sortedValue.sort((a, b) => a.name.localeCompare(b.name));
	}

	if (sort === 'name-desc') {
		sortedValue.sort((a, b) => b.name.localeCompare(a.name));
	}
	return (
		<>
		<div className='flex justify-end mb-6 '>
						<Filter />
					</div>
					<div className='flex justify-end '>
						<Sort />
					</div>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
				{sortedValue.map((cabin) => (
					<CabinCard cabin={cabin} key={cabin.id} />
				))}
			</div>
		</>
	);
}
