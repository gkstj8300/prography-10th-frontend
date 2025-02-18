import styled from 'styled-components';

export const SecondSection: React.FC = () => {
	const part = [
		'Product Owner',
		'Design',
		'IOS',
		'AOS',
		'Frontend(React)',
		'Backend(Spring)',
	];
	const partColors = [
		'rgb(247 27 27)',
		'rgb(247 157 50)',
		'rgb(208 212 52)',
		'rgb(74 239 39)',
		'rgb(34 222 241)',
		'rgb(39 118 248)',
	];

	return (
		<SecondContainer>
			<h2>
				드디어 Prography <Strong color="#0f31f7">10기</Strong> 모집이
				시작되었습니다.
			</h2>
			<Part>
				{part.map((part, index) => (
					<h3 key={part} style={{ backgroundColor: partColors[index] }}>
						{part}
					</h3>
				))}
			</Part>
			<h3>총 6개의 파트를 모집합니다.</h3>
		</SecondContainer>
	);
};
SecondSection.displayName = 'SecondSection';

const Strong = styled.strong<{ color?: string }>`
	color: ${({ color }) => color || 'inherit'};
`;

const SecondContainer = styled.section`
	display: block;
`;

const Part = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.3rem;
	padding: 1rem 0;

	h3 {
		display: inline-block;
		padding: 0.3rem 1rem;
		border-radius: 10px;
	}
`;
