import styled from 'styled-components';
import { MdOutlineCheckBox } from 'react-icons/md';
import {
	TbCircleNumber1,
	TbCircleNumber2,
	TbCircleNumber3,
} from 'react-icons/tb';
import { StepType } from '../Application.hook';

type Props = {
	step: StepType;
	stepsTitle: string[];
};

export const StepItem: React.FC<Props> = ({ step, stepsTitle }) => {
	return (
		<StepContainer>
			{stepsTitle.map((title, index) => {
				const checkIndex = index + 1;
				return (
					<Item key={index}>
						{checkIndex < Number(step) || step === 'submit' ? (
							<MdOutlineCheckBox />
						) : (
							<>
								{checkIndex === 1 && (
									<TbCircleNumber1 aria-selected={checkIndex === step} />
								)}
								{checkIndex === 2 && (
									<TbCircleNumber2 aria-selected={checkIndex === step} />
								)}
								{checkIndex === 3 && (
									<TbCircleNumber3 aria-selected={checkIndex === step} />
								)}
							</>
						)}
						{title}
					</Item>
				);
			})}
		</StepContainer>
	);
};
StepItem.displayName = 'StepItem';

const StepContainer = styled.div`
	display: flex;
	gap: 3rem;
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	border-bottom: 0.1rem solid;

	@media (max-width: 999px) {
		gap: 1rem;
		font-size: 0.8rem;
	}
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;

	svg {
		width: 1.5rem;
		height: 1.5rem;
	}

	svg[aria-selected='true'] {
		background-color: #fb205e;
		border-radius: 10px;
	}
`;
