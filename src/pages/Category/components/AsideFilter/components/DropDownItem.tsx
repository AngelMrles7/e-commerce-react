interface DropDownItemProps {
	id: string;
	name: string;
	value: string;
	onChange: (value: string) => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({
	id,
	name,
	value,
	onChange,
}) => {
	return (
		<li className='dropdown__menu__list__item'>
			<label htmlFor={id} className='dropdown__menu__list__item__checkbox'>
				<input
					type='checkbox'
					name={name}
					value={value}
					id={id}
					className='dropdown__menu__list__item__checkbox__input'
					onChange={() => onChange(value)}
				/>
				<span className='dropdown__menu__list__item__checkbox__text'>
					{name}
				</span>
			</label>
		</li>
	);
};

export default DropDownItem;
