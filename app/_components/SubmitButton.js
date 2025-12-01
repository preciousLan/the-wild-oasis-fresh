'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

export function Button({ children, pendingLabel }) {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className='bg-amber-500 px-8 py-4 text-foreground font-semibold hover:bg-amber-600 transition-all 
				disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
			{pending ? pendingLabel : children}
		</button>
	);
}
