import { Header } from './header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Layout: React.FC = () => {
	const location = useLocation();
	const pathIsHome = location.pathname === '/';

	return (
		<>
			{pathIsHome && <Header />}
			<LayoutContainer $pathIsHome={pathIsHome}>
				<Outlet />
			</LayoutContainer>
		</>
	);
};
Layout.displayName = 'Layout';

const LayoutContainer = styled.div<{ $pathIsHome: boolean }>`
	width: 100%;
	margin: 0 auto;
	${({ $pathIsHome }) =>
		$pathIsHome &&
		`
		max-width: 1120px;
		padding: 1rem;
	`}
`;
