import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';

const Router: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
