import { useState, useEffect } from 'react';

const useScreenSize = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [screenHeight, setScreenHeight] = useState(window.innerHeight);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		setScreenWidth(window.innerWidth);
		setScreenHeight(window.innerHeight);
	};

	return { screenWidth, screenHeight };
};

export default useScreenSize;
