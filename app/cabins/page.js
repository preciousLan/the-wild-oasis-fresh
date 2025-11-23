import { Suspense } from 'react';
import CabinList from '../_components/CabinList';
import Spinner from '../_components/Spinner';

export const metadata = {
	title: 'cabins',
	description: 'Safe Bookings ',
};

export default async function Page({ searchParams }) {
	const params = await searchParams;
	const filter = params?.capacity || 'all';
	const sort = params?.sortBy || 'price-asc';

	return (
		<div className='text-background'>
			<h1 className='text-4xl mb-5 text-amber-500 font-medium'>
				Our Luxury Cabins
			</h1>
			<p className=' text-lg mb-10'>
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature&apos;s beauty in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>
			

			<Suspense fallback={<Spinner key={filter} />}>
				<CabinList filter={filter} sort={sort} />
			</Suspense>
		</div>
	);
}
