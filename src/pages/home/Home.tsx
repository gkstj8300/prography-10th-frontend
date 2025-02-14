import { ScrollAnimationContainer } from '../../components/ui/animations/ScrollAnimationContainer';

export const Home: React.FC = () => {
	return (
		<>
			<ScrollAnimationContainer>test1</ScrollAnimationContainer>
			<ScrollAnimationContainer>test2</ScrollAnimationContainer>
			<ScrollAnimationContainer>test3</ScrollAnimationContainer>
			<ScrollAnimationContainer>test4</ScrollAnimationContainer>
		</>
	);
};
Home.displayName = 'Home';
