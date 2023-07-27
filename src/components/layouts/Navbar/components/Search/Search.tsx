import { LuSearch } from 'react-icons/lu';

function Search() {
	return (
		<form className='nav__search-bar__form'>
			<input
				type='text'
				placeholder='Search'
				className='nav__search-bar__form__input'
				name='search'
			/>
			<button
				title='search'
				type='submit'
				className='nav__search-bar__form__button'
			>
				<LuSearch />
			</button>
		</form>
	);
}

export default Search;
