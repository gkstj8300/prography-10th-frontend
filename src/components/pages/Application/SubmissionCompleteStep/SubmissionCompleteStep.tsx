import styled from 'styled-components';
import { MdPlaylistAddCheckCircle } from 'react-icons/md';

export const SubmissionCompleteStep: React.FC = () => {
	return (
		<SubmissionContainer>
			<MdPlaylistAddCheckCircle />
			<SubmissionContent>
				<Title>지원이 완료되었습니다!</Title>
				<SubTitle>프로그라피 10기를 지원해주셔서 감사합니다.</SubTitle>
				<SubTitle>
					서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
				</SubTitle>
			</SubmissionContent>
		</SubmissionContainer>
	);
};
SubmissionCompleteStep.displayName = 'SubmissionCompleteStep';

const SubmissionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		width: 10rem;
		height: 10rem;
	}
`;

const SubmissionContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h3`
	margin: 1rem 0;
`;

const SubTitle = styled.h4`
	color: #6f6f6f;
`;
