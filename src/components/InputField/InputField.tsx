interface InputFieldProps {
	labelName: string;
	name: string;
	placeholder?: string;
	type: string;
	value: string;
	onChange: any;
	onBlur: any;
	error?: string;
	touched?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
	labelName,
	name,
	placeholder,
	type,
	value,
	onChange,
	onBlur,
	error,
	touched,
}) => {
	return (
		<div className='input-field__group'>
			<label htmlFor={name} className='input-field__label'>
				{labelName}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				className={`input-field ${
					error && touched ? 'input-field--error' : ''
				}`}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && touched && (
				<p className='input-field--error__message'>{error}</p>
			)}
		</div>
	);
};

export default InputField;
