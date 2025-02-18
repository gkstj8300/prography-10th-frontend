import styled from 'styled-components';
import { Button } from 'src/components/ui/buttons';
import { ApplicationType } from 'src/pages/application';
import { StepButtonType, StepType } from '../Application.hook';
import { useNavigation } from 'src/hooks/useNavigation';

type Props = {
	step: StepType;
	applicationData: ApplicationType;
	handleStepClick: (type: StepButtonType) => void;
	handleSubmit: (event: React.FormEvent) => void;
};

export const StepNavigation: React.FC<Props> = ({
	step,
	applicationData,
	handleStepClick,
	handleSubmit,
}) => {
	const { goToPage } = useNavigation();

	const isNextEnabled = checkIsNextEnabled(step, applicationData);

	const renderButtons = () => {
		if (step === 'submit') {
			return (
				<Button theme="next" onClick={() => goToPage('/')}>
					홈으로 돌아가기
				</Button>
			);
		}

		return (
			<>
				<Button
					theme="prev"
					onClick={() => handleStepClick('prev')}
					disabled={step === 1}
				>
					이전
				</Button>
				{step !== 3 ? (
					<Button
						theme="next"
						onClick={() => handleStepClick('next')}
						disabled={!isNextEnabled}
					>
						다음
					</Button>
				) : (
					<Button theme="next" onClick={handleSubmit} disabled={!isNextEnabled}>
						제출하기
					</Button>
				)}
			</>
		);
	};

	return <ButtonWrapper>{renderButtons()}</ButtonWrapper>;
};

StepNavigation.displayName = 'StepNavigation';

const checkIsNextEnabled = (step: StepType, data: ApplicationType): boolean => {
	const { consentAgreed, name, email, phoneNumber, applicationField } = data;

	switch (step) {
		case 1:
			return consentAgreed === 'agree';
		case 2:
			return (
				/^[a-zA-Z가-힣]+$/.test(name) &&
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
				/^010-\d{4}-\d{4}$/.test(phoneNumber)
			);
		case 3:
			return !!applicationField;
		default:
			return false;
	}
};

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 3rem;
	gap: 3rem;
`;
