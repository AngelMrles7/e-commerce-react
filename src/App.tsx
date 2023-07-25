import { Footer } from './components/layouts/Footer/Footer';
import { Navbar } from './components/layouts/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<main className='main'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
