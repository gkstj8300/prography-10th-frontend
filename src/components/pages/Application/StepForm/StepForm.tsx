import styled from 'styled-components';
import { ApplicationType } from 'src/pages/application';
import { ConsentStatus, ApplicationField } from 'src/pages/application';
import { StepButtonType, StepType } from '../Application.hook';
import { motion, AnimatePresence } from 'framer-motion';
import { ConsentAgreementStep } from '../ConsentAgreementStep';
import { BasicInfoStep } from '../BasicInfoStep';
import { ApplicationInfoStep } from '../ApplicationInfoStep';
import { StepNavigation } from '../StepNavigation';
import { SubmissionCompleteStep } from '../SubmissionCompleteStep';

type Props = {
	step: StepType;
	applicationData: ApplicationType;
	handleClickAgreement: (option: ConsentStatus) => void;
	handleStepClick: (type: StepButtonType) => void;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleCheckApplicationField: (option: ApplicationField) => void;
	handleSubmit: (event: React.FormEvent) => void;
};

export const StepForm: React.FC<Props> = ({
	step,
	applicationData,
	handleClickAgreement,
	handleStepClick,
	handleInputChange,
	handleCheckApplicationField,
	handleSubmit,
}) => {
	const stepComponents: Record<StepType, JSX.Element> = {
		1: (
			<ConsentAgreementStep
				consentAgreed={applicationData.consentAgreed}
				handleClickAgreement={handleClickAgreement}
			/>
		),
		2: (
			<BasicInfoStep
				{...applicationData}
				handleInputChange={handleInputChange}
			/>
		),
		3: (
			<ApplicationInfoStep
				applicationField={applicationData.applicationField}
				handleCheckApplicationField={handleCheckApplicationField}
			/>
		),
		submit: <SubmissionCompleteStep />,
	};

	return (
		<StepFormContainer>
			<AnimatePresence mode="wait">
				{step in stepComponents && (
					<AnimatedStep key={step}>{stepComponents[step]}</AnimatedStep>
				)}
			</AnimatePresence>

			<StepNavigation
				step={step}
				applicationData={applicationData}
				handleStepClick={handleStepClick}
				handleSubmit={handleSubmit}
			/>
		</StepFormContainer>
	);
};

StepForm.displayName = 'StepForm';

const AnimatedStep = styled(motion.div).attrs({
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 50 },
	transition: { duration: 0.3 },
})`
	margin-bottom: 2rem;
`;

const StepFormContainer = styled.form`
	display: block;
`;
