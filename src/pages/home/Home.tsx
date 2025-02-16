import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ScrollAnimationContainer } from '../../components/ui/animations/ScrollAnimationContainer';

export const Home: React.FC = () => {
	const part = useMemo(() => [
		'Product Owner', 'Design', 'IOS', 'AOS', 'Frontend(React)', 'Backend(Spring)'
	], []);	  
	const partColors = useMemo(() => [
		'rgb(247 27 27)', 'rgb(247 157 50)', 'rgb(208 212 52)',
		'rgb(74 239 39)', 'rgb(34 222 241)', 'rgb(39 118 248)'
	], []);

	return (
		<HomeContainer>
			<ScrollAnimationContainer>
				<FirstSection>
					<h2>안녕하세요.</h2>
					<h2>
						새로운 가치를 만들어가는 IT커뮤니티, <Strong color="#f22351">Prography</Strong> 입니다.
					</h2>
				</FirstSection>
			</ScrollAnimationContainer>

			<ScrollAnimationContainer>
				<SecondSection>
					<h2>
						드디어 Prography <Strong color="#0f31f7">10기</Strong> 모집이 시작되었습니다.
					</h2>
					<Part>
						{part.map((part, index) => (
							<h3 key={part} style={{ backgroundColor: partColors[index] }}>{part}</h3>
						))}
					</Part>
					<h3>총 6개의 파트를 모집합니다.</h3>
				</SecondSection>
			</ScrollAnimationContainer>

			<ScrollAnimationContainer>
				<ThirdSection>
					<ul>
						<li>새로운 가치를 만들어내는데 가슴이 두근거리신다면,</li>
						<li>열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</li>
						<li>탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</li>
					</ul>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<h2>"프로답게, 재미있게"</h2>
					<h3>재미있는 작당을 함께 만들어갈 10기에 합류하세요.</h3>
				</ThirdSection>
			</ScrollAnimationContainer>
			<ScrollAnimationContainer>
				<FourthSection>
					<h3>
						자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요
					</h3>
					<LinkWrap>
						<IsLeft>
							<Link to={'#'}>
								<span>프로그라피 10기 모집 자세히 알아보기</span>
								<StyledImage imageUrl='https://prography.org/assets/images/culture-img-2.png'/>
							</Link>
						</IsLeft>
						<IsRight>
							<Link to={'#'}>
								<span>공식 홈페이지</span>
								<StyledImage imageUrl='https://prography.org/assets/images/culture-img-1.png'/>
							</Link>
							<Link to={'#'}>
								<span>인스타그램</span>
								<StyledImage imageUrl='https://prography.org/assets/images/culture-img-3.png'/>
							</Link>
						</IsRight>
					</LinkWrap>
				</FourthSection>
			</ScrollAnimationContainer>
			<SupportIn>
				<Link to={'#'}>
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

const Strong = styled.strong<{ color?: string }>`
	color: ${({ color }) => color || 'inherit'};
`;

const FirstSection = styled.section`
	display: flex;
	flex-direction: column;
`;

const SecondSection = styled.section`
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

const ThirdSection = styled.section`
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
`;

const FourthSection = styled.section`

`;

const LinkWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 48px;

	a {
		display: flex;
		width: 100%;
		padding: 10px;
		border-radius: 18px;
		font-size: 1.3rem;
		isolation: isolate;
		align-items: center;
		caret-color: transparent;

		&:hover {
			color: #fa2454;
		}
	}

	span {
	    flex: 1;
    	text-align: center;
	}

	image {
		text-align: right;
	}
	
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const IsLeft = styled.div`
	width: 50%;
    padding-right: 12px;

	@media (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}	
`;

const IsRight = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 50%;
    padding-left: 12px;

	@media (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}		
`;

const StyledImage = styled.div<{ imageUrl: string }>`
	width: 10rem;
	height: 10rem;
	background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
	background-size: contain;
	border-radius: 25px;
	transition: 0.4s ease;
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