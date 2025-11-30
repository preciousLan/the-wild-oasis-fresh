import React, { Children } from 'react';
import SideNavigation from '../_components/SideNavigation';

const layout = ({ children }) => {
	return (
		<div className='grid grid-cols-[16rem_1fr] h-screen overflow-hidden gap-12 ' >
			<div className='  h-screen'><SideNavigation/></div>
			<div className='py-1 overflow-auto h-screen '>{children}</div>
		</div>
	);
};

export default layout;
