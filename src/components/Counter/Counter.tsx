interface CounterProps {
	state: number;
	maxValue: number | undefined;
	minValue?: number;
	handleDecrement: () => void;
	handleIncrement: () => void;
}

const Counter: React.FC<CounterProps> = ({
	state,
	maxValue = 1,
	minValue = 0,
	handleDecrement,
	handleIncrement,
}) => {
	return (
		<div className='counter'>
			<button
				type='button'
				className='counter__decrement'
				onClick={handleDecrement}
				disabled={state <= minValue}
			>
				-
			</button>
			<input type='text' value={state} />
			<button
				type='button'
				className='counter__increase'
				onClick={handleIncrement}
				disabled={state >= maxValue}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
