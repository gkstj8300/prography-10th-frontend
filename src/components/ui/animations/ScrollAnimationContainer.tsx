import styled, { keyframes } from 'styled-components';
import { useScrollAnimation } from 'src/hooks/useScrollAnimation';

type PropsType = {
	children: React.ReactNode;
};

export const ScrollAnimationContainer = ({ children }: PropsType) => {
	const { ref, isInViewport } = useScrollAnimation();
	return (
		<Container ref={ref} className={isInViewport ? 'frame-in' : ''}>
			{children}
		</Container>
	);
};

const animation = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0px, 50px, 0px);
    };

    100% {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
    };
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;

	&.frame-in {
		animation: ${animation} 2s forwards;
	}
`;
