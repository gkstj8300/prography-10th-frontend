import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home } from '../pages/home';

const Router: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
