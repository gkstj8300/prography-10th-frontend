import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ScrollAnimationContainer } from 'src/components/ui/animations/ScrollAnimationContainer';
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';

export const Home: React.FC = () => {
	return (
		<HomeContainer>
			<ScrollAnimationContainer>
				<FirstSection />
			</ScrollAnimationContainer>
			<ScrollAnimationContainer>
				<SecondSection />
			</ScrollAnimationContainer>
			<ScrollAnimationContainer>
				<ThirdSection />
			</ScrollAnimationContainer>
			<ScrollAnimationContainer>
				<FourthSection />
			</ScrollAnimationContainer>
			<SupportIn>
				<Link to={'/application'}>
					<div>지원하기</div>
					<i></i>
				</Link>
			</SupportIn>
		</HomeContainer>
	);
};
Home.displayName = 'Home';

const HomeContainer = styled.div`
	overflow: hidden;
`;

const supportAnimation = keyframes`
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(12px);
	}
`;

const SupportIn = styled.div`
	position: fixed;
	bottom: 3rem;
	right: 2rem;
	z-index: 5;
	opacity: 0.9;
	animation: ${supportAnimation} 1.2s ease infinite alternate;

	a {
		display: flex;
		align-items: center;
	}

	i {
		width: 56px;
		height: 56px;
		background: url(mouse.png) no-repeat 0 0;
		background-size: cover;
	}
`;
