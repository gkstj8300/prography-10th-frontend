import styled from 'styled-components';

export const ThirdSection: React.FC = () => {
	return (
		<ThirdContainer>
			<ul>
				<li>새로운 가치를 만들어내는데 가슴이 두근거리신다면,</li>
				<li>열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</li>
				<li>탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</li>
			</ul>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<h2>"프로답게, 재미있게"</h2>
			<h3>재미있는 작당을 함께 만들어갈 10기에 합류하세요.</h3>
		</ThirdContainer>
	);
};
ThirdSection.displayName = 'ThirdSection';

const ThirdContainer = styled.section`
	font-size: 1.5rem;
	text-align: center;
	margin-top: 3rem;

	h2 {
		font-size: 2rem;
		font-weight: bold;
		color: #f8d210;
	}

	h3 {
		margin-top: 1rem;
		font-size: 1.2rem;
		color: #ffffff;
	}

	ul {
		list-style-type: none;
		padding-left: 0;
	}

	li {
		padding: 0.5rem 0;
		font-weight: 600;

		&::before {
			content: '✔';
			position: absolute;
			transform: translateX(-120%);
			color: green;
		}
	}

	@media (max-width: 999px) {
		li::before {
			content: none;
		}
	}
`;
