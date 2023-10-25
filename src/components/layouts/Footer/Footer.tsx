import { LuFacebook, LuInstagram } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/mylogo.png';

export const Footer = () => {
	return (
		<footer className='footer-section'>
			<div className='footer-section__container'>
				<div className='footer-section__main-links'>
					<div className='footer-section__main-links__card'>
						<h4 className='footer-section__main-links__card__title'>
							Recursos
						</h4>
						<ul className='footer-section__main-links__card__list'>
							<li className='link'>
								<Link to='#'>Lorem ipsum dolor</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum</Link>
							</li>
						</ul>
					</div>
					<div className='footer-section__main-links__card'>
						<h4 className='footer-section__main-links__card__title'>Company</h4>
						<ul className='footer-section__main-links__card__list'>
							<li className='link'>
								<Link to='#'>Lorem ipsum</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum</Link>
							</li>
						</ul>
					</div>
					<div className='footer-section__main-links__card'>
						<h4 className='footer-section__main-links__card__title'>
							Recursos
						</h4>
						<ul className='footer-section__main-links__card__list'>
							<li className='link'>
								<Link to='#'>Lorem ipsum dolor sit</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum dolor</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum dolor.</Link>
							</li>
						</ul>
					</div>
					<div className='footer-section__main-links__card'>
						<h4 className='footer-section__main-links__card__title'>
							Politicas
						</h4>
						<ul className='footer-section__main-links__card__list'>
							<li className='link'>
								<Link to='#'>Lorem ipsum dolor adipisicing elit.</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem</Link>
							</li>
							<li className='link'>
								<Link to='#'>Lorem ipsum dolor</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-section__social'>
					<div className='footer-section__social__company-logo'>
						{/* include the url where the logo of the company is located */}
						<img src={logo} alt='company logo' />
					</div>
					{/* include links to social networks */}
					<ul className='footer-section__social__list'>
						<li className='footer-section__social__list__item'>
							<a href='#' title='navigation'>
								<LuFacebook />
							</a>
						</li>
						<li className='footer-section__social__list__item'>
							<a href='#' title='navigation'>
								<LuInstagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
