import styled from 'styled-components';
import { Checkbox } from 'src/components/ui/checkbox';
import type { ConsentStatus } from 'src/pages/application';

type Props = {
	consentAgreed: ConsentStatus;
	handleClickAgreement: (option: ConsentStatus) => void;
};

export const ConsentAgreementStep: React.FC<Props> = ({
	consentAgreed,
	handleClickAgreement,
}) => {
	return (
		<div>
			<Title>개인정보 수집 동의</Title>
			<StepContent>
				<h4>수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내</h4>
				<h4>수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</h4>
				<h4>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</h4>
			</StepContent>
			<SubTitle>개인정보 수집 여부 동의 여부를 체크해주세요.</SubTitle>
			<CheckboxWrapper>
				<Checkbox
					onClick={() => handleClickAgreement('agree')}
					isCheck={consentAgreed === 'agree'}
				>
					개인정보 수집 여부에 동의합니다.
				</Checkbox>
				<Checkbox
					onClick={() => handleClickAgreement('disAgree')}
					isCheck={consentAgreed === 'disAgree'}
				>
					개인정보 수집 여부에 동의하지 않습니다.
				</Checkbox>
			</CheckboxWrapper>
		</div>
	);
};
ConsentAgreementStep.displayName = 'ConsentAgreementStep';

const Title = styled.h3`
	margin-bottom: 0.5rem;
`;

const StepContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
	color: #6f6f6f;
	margin-bottom: 1rem;
`;

const CheckboxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
