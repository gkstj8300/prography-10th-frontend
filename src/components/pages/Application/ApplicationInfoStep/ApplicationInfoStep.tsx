import styled from 'styled-components';
import { Checkbox } from 'src/components/ui/checkbox';
import type { ApplicationField } from 'src/pages/application';

type Props = {
	applicationField: ApplicationField;
	handleCheckApplicationField: (option: ApplicationField) => void;
};

export const ApplicationInfoStep: React.FC<Props> = ({
	applicationField,
	handleCheckApplicationField,
}) => {
	const applicationFields = [
		'프론트엔드',
		'백엔드',
		'디자인',
		'iOS',
		'안드로이드',
		'Product Owner',
	] as const;

	return (
		<div>
			<Title>지원 정보</Title>
			<SubTitle>
				지원하고자 하는 분야를 선택해주세요 <RequiredValue>*</RequiredValue>
			</SubTitle>
			<CheckboxWrapper>
				{applicationFields.map(field => (
					<Checkbox
						key={field}
						onClick={() => handleCheckApplicationField(field)}
						isCheck={applicationField === field}
					>
						{field}
					</Checkbox>
				))}
			</CheckboxWrapper>
		</div>
	);
};
ApplicationInfoStep.displayName = 'ApplicationInfoStep';

const Title = styled.h3`
	margin-bottom: 0.5rem;
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

const RequiredValue = styled.strong`
	color: red;
`;
