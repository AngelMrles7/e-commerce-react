import { LuLogIn } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const UserActions = () => {
	return (
		<div className='user-actions__popover'>
			<ul className='user-actions__popover__options'>
				<li className='user-actions__popover__options__item'>
					<Link to='/signin'>Sign In</Link>
				</li>
				<li className='user-actions__popover__options__item'>
					<Link to='/signup'>Sign Up</Link>
				</li>
				<li className='user-actions__popover__options__item'>
					<Link to='/dashboard'>Dashboard</Link>
				</li>

				<li className='user-actions__popover__options__item'>
					<button
						title='Logout'
						className='user-actions__popover__options__item--logout-btn'
					>
						<LuLogIn />
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
};

export default UserActions;
