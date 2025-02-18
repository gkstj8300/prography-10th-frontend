import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FourthSection: React.FC = () => {
	return (
		<FourthContainer>
			<h3>자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요</h3>
			<LinkWrap>
				<IsLeft>
					<Link to={'https://prography.org/contact'}>
						<span>프로그라피 10기 모집 자세히 알아보기</span>
						<StyledImage imageUrl="https://prography.org/assets/images/culture-img-2.png" />
					</Link>
				</IsLeft>
				<IsRight>
					<Link to={'https://prography.org/'}>
						<span>공식 홈페이지</span>
						<StyledImage imageUrl="https://prography.org/assets/images/culture-img-1.png" />
					</Link>
					<Link to={'https://www.instagram.com/prography_official/'}>
						<span>인스타그램</span>
						<StyledImage imageUrl="https://prography.org/assets/images/culture-img-3.png" />
					</Link>
				</IsRight>
			</LinkWrap>
		</FourthContainer>
	);
};
FourthSection.displayName = 'FourthSection';

const FourthContainer = styled.section``;

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
