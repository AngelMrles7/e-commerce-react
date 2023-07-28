import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';

interface CarouselBtnProps {
	direction: 'next' | 'prev';
	move: () => void;
}

const CarouselBtn: React.FC<CarouselBtnProps> = ({ direction, move }) => {
	return (
		<button
			type='button'
			title={direction}
			onClick={move}
			className={
				direction === 'next' ? 'carousel__btn next' : 'carousel__btn prev'
			}
		>
			{direction === 'next' ? <LuChevronRight /> : <LuChevronLeft />}
		</button>
	);
};

export default CarouselBtn;
