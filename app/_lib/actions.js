'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBooking, getBookings } from './data-service';
import { redirect } from 'next/navigation';

export async function signInAction() {
	await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
	await signOut({ redirectTo: '/' });
}

export async function updateProfile(formData) {
	const session = await auth();
	if (!session) throw new Error('you must be logged in');

	const nationalID = (formData.get('nationalID') || '').trim();
	if (!nationalID) return;

	const [nationality, countryFlag] = formData.get('nationality').split('%');

	const regex = /^[A-Za-z0-9]{6,12}$/;

	if (!regex.test(nationalID))
		throw new Error('please provide a valid nationalID');

	const updateData = {
		nationalID,
		nationality,
		countryFlag,
	};

	const { data, error } = await supabase
		.from('guests')
		.update(updateData)
		.eq('id', await session.user.guestId);

	if (error) throw new Error('Guest could not be updated');
	revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {
	const session = await auth();
	if (!session) throw new Error('you must be logged in');

	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((bookings) => bookings.id);
	if (!guestBookingIds.includes(bookingId))
		throw new Error('sorry cant do this');

	const { error } = await supabase
		.from('bookings')
		.delete()
		.eq('id', bookingId);

	if (error) {
		throw new Error('Booking could not be deleted');
	}
	revalidatePath('/account/reservations');
}

export async function updateReservation(formData) {
	const bookingId = Number(formData.get('reservationId'));

	//Authentication
	const session = await auth();
	if (!session) throw new Error('you must be logged in');


	//Authorization
	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((bookings) => bookings.id);
	if (!guestBookingIds.includes(bookingId))
		throw new Error('sorry cant do this');


	//mutation
	const { data, error } = await supabase
		.from('bookings')
		.update({
			numGuests: Number(formData.get('numGuests')),
			observations: formData.get('observations').slice(0, 1000),
		})
		.eq('id', bookingId)
		.select()
		.single();

		//error handling
	if (error) {
		throw new Error('Guest could not be updated');
	}

	// revalidatePath('/account/reservations');

	//redicting
	redirect('/account/reservations');
}
