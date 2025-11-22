import React, { Children } from 'react';
import SideNavigation from '../_components/SideNavigation';

const layout = ({ children }) => {
	return (
		<div className='grid grid-cols-[16rem_1fr] h-full overflow-y-hidden gap-12 ' >
			<div><SideNavigation/></div>
			<div className='py-1'>{children}</div>
		</div>
	);
};

export default layout;
