import styled from 'styled-components';
import { ApplicationType } from 'src/pages/application';
import { ConsentStatus, ApplicationField } from 'src/pages/application';
import { StepButtonType, StepType } from '../Application.hook';
import { motion, AnimatePresence } from 'framer-motion';
import { ConsentAgreementStep } from '../ConsentAgreementStep';
import { BasicInfoStep } from '../BasicInfoStep';
import { ApplicationInfoStep } from '../ApplicationInfoStep';
import { StepNavigation } from '../StepNavigation';

type Props = {
	step: StepType;
	applicationData: ApplicationType;
	handleClick: (option: ConsentStatus) => void;
	handleStepClick: (type: StepButtonType) => void;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleCheckApplicationField: (option: ApplicationField) => void;
	handleSubmit: (event: React.FormEvent) => void;
};

export const StepForm: React.FC<Props> = ({
	step,
	applicationData,
	handleClick,
	handleStepClick,
	handleInputChange,
	handleCheckApplicationField,
	handleSubmit,
}) => {
	return (
		<StepFormContainer>
			<AnimatePresence mode="wait">
				{step === 1 && (
					<StepSection
						key="step1"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.3 }}
					>
						<ConsentAgreementStep
							consentAgreed={applicationData.consentAgreed}
							handleClick={handleClick}
						/>
					</StepSection>
				)}
				{step === 2 && (
					<StepSection
						key="step2"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.3 }}
					>
						<BasicInfoStep
							{...applicationData}
							handleInputChange={handleInputChange}
						/>
					</StepSection>
				)}
				{step === 3 && (
					<StepSection
						key="step3"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.3 }}
					>
						<ApplicationInfoStep
							applicationField={applicationData.applicationField}
							handleCheckApplicationField={handleCheckApplicationField}
						/>
					</StepSection>
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

const StepFormContainer = styled.form`
	display: block;
`;

const StepSection = styled(motion.div)`
	margin-bottom: 2rem;
`;
