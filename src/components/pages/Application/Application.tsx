import styled from 'styled-components';
import { useApplication } from './Application.hook';
import { StepItem } from './StepItem';
import { StepForm } from './StepForm';

export const Application: React.FC = () => {
	const {
		step,
		stepsTitle,
		applicationData,
		handleClick,
		handleStepClick,
		handleInputChange,
		handleCheckApplicationField,
		handleSubmit,
	} = useApplication();

	return (
		<ApplicationContainer>
			{/* <SideBanner /> */}
			<StepWrap>
				<StepItem step={step} stepsTitle={stepsTitle} />
				<StepForm
					step={step}
					applicationData={applicationData}
					handleClick={handleClick}
					handleStepClick={handleStepClick}
					handleInputChange={handleInputChange}
					handleCheckApplicationField={handleCheckApplicationField}
					handleSubmit={handleSubmit}
				/>
			</StepWrap>
		</ApplicationContainer>
	);
};
Application.displayName = 'Application';

const ApplicationContainer = styled.div`
	display: flex;
	min-height: 100vh;

	&::before {
		flex: 1;
		content: '';
		background: url(https://prography.org/assets/images/culture-img-7.png)
			no-repeat 50% / cover;
	}

	@media (max-width: 999px) {
		flex-direction: column;

		&::before {
			display: none;
			content: '';
			background: url(https://prography.org/assets/images/culture-img-7.png)
				no-repeat 50% / cover;
		}
	}
`;

const StepWrap = styled.div`
	max-width: 1000px;
	padding: 10rem 7rem;

	@media (max-width: 999px) {
		flex: 1;
		padding: 24px;
	}
`;
