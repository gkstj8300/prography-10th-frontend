import { Header } from './header';
import styled from 'styled-components';

export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<LayoutContainer />
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
