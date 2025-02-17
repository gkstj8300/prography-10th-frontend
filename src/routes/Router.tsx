import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import ApplicationPage from '../pages/application/Application';
import Home from '../pages/home/Home';

const Router: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/application" element={<ApplicationPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
