import styled from 'styled-components';

export const FirstSection: React.FC = () => {
	return (
		<FirstContainer>
			<h2>안녕하세요.</h2>
			<h2>
				새로운 가치를 만들어가는 IT커뮤니티,{' '}
				<Strong color="#f22351">Prography</Strong> 입니다.
			</h2>
		</FirstContainer>
	);
};
FirstSection.displayName = 'FirstSection';

const Strong = styled.strong<{ color?: string }>`
	color: ${({ color }) => color || 'inherit'};
`;

const FirstContainer = styled.section`
	display: flex;
	flex-direction: column;
`;
