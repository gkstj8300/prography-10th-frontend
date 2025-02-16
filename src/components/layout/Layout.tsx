import { Header } from './header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<LayoutContainer>
				<Outlet />
			</LayoutContainer>
		</>
	);
};
Layout.displayName = 'Layout';

const LayoutContainer = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 1rem;
`;
