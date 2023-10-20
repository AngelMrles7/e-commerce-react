import { ReactNode, useState } from 'react';
interface DropDownProps {
	title: string;
	children: ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({ title, children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='dropdown'>
			<button
				type='button'
				className='dropdown__btn'
				onClick={() => setIsActive(!isActive)}
			>
				{title}
			</button>
			<div className={`dropdown__menu ${isActive ? 'show' : ''}`}>
				<ul className='dropdown__menu__list'>{children}</ul>
			</div>
		</div>
	);
};

export default DropDown;
