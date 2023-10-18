import { useState } from 'react';

interface ImageGalleryProps {
	images: [];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
	const [position, setPosition] = useState(0);

	const handleTab = (index: number) => {
		setPosition(index);
	};

	return (
		<section className='image-gallery'>
			<div className='image-gallery__display'>
				<img
					src={images?.[position].image}
					alt=''
					className='image-gallery__display__image'
				/>
			</div>
			<ul className='image-gallery__thumbnails'>
				{images.map((item, index) => (
					<li
						key={item.id}
						className={`image-gallery__thumbnail ${
							position === index ? 'selected' : ''
						}`}
						onClick={() => handleTab(index)}
					>
						<img
							src={item.image}
							alt=''
							className='image-gallery__thumbnail__image'
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ImageGallery;
