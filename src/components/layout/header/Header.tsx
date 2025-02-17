import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
	const location = useLocation();

	return (
		<HeaderContainer>
			<HeaderInner>
				<Logo>
					{location.pathname === '/' ? (
						<LogoImage />
					) : (
						<Link to="/">
							<LogoImage />
						</Link>
					)}
				</Logo>
			</HeaderInner>
		</HeaderContainer>
	);
};
Header.displayName = 'Header';

const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	z-index: 30;
	box-shadow: rgb(0 0 0 / 0.08) 0 0 8px;
	opacity: 1;
	backdrop-filter: blur(5px);
	transition: top 0.5s, opacity 0.5s;
`;

const HeaderInner = styled.div`
	margin: 8px 10px;
	width: calc(100% - 16px);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.span`
	height: 32px;
`;

const LogoImage = styled.img.attrs({
	src: 'prography.png',
	alt: 'prography-logo',
})`
	display: block;
	width: 92px;
	height: 32px;
`;
