import styled from 'styled-components';
import { useMemo } from 'react';
import { Button } from 'src/components/ui/buttons';
import { ApplicationType } from 'src/pages/application';
import { StepButtonType, StepType } from '../Application.hook';

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
	const isNextEnabled = useMemo(() => {
		const { consentAgreed, name, email, phoneNumber, applicationField } =
			applicationData;

		if (step === 1) {
			return consentAgreed === 'agree';
		}

		if (step === 2) {
			const isValidName = /^[a-zA-Z가-힣]+$/.test(name);
			const isValidEmail =
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
			const isValidPhone = /^010-\d{4}-\d{4}$/.test(phoneNumber);
			return isValidName && isValidEmail && isValidPhone;
		}

		if (step === 3) {
			return !!applicationField;
		}

		return false;
	}, [applicationData, step]);

	return (
		<ButtonWrapper>
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
		</ButtonWrapper>
	);
};
StepNavigation.displayName = 'StepNavigation';

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 3rem;
	gap: 3rem;
`;
