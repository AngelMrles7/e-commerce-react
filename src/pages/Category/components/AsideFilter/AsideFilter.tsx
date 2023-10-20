import { FC, ReactElement } from 'react';

interface AsideFilterProps {
	children: ReactElement;
}

const AsideFilter: FC<AsideFilterProps> = ({ children }) => {
	return (
		<aside className='aside-filter'>
			<div className='aside-filter__card'>
				<h4 className='aside-filter__card__title'>Filter:</h4>
				<div className='aside-filter__card__content'>
					<div>{children}</div>
				</div>
			</div>
		</aside>
	);
};

export default AsideFilter;
