import styled from 'styled-components';
import { TextInput } from 'src/components/ui/inputs';

type Props = {
	name: string;
	email: string;
	phoneNumber: string;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const BasicInfoStep: React.FC<Props> = ({
	name,
	email,
	phoneNumber,
	handleInputChange,
}) => {
	return (
		<div>
			<Title>기본 정보</Title>
			<SubTitle>연락 가능한 정보를 입력해주세요</SubTitle>
			<TextInput
				title="성함"
				placeholder="성함을 입력해주세요"
				type="text"
				name="name"
				isRequired
				value={name}
				onChange={handleInputChange}
			/>
			<TextInput
				title="이메일 주소"
				placeholder="예시: prography@gmail.com"
				type="email"
				name="email"
				isRequired
				value={email}
				onChange={handleInputChange}
			/>
			<TextInput
				title="휴대폰 번호"
				placeholder="예시: 010-1234-5678"
				type="text"
				name="phoneNumber"
				isRequired
				value={phoneNumber}
				onChange={handleInputChange}
			/>
		</div>
	);
};
BasicInfoStep.displayName = 'BasicInfoStep';

const Title = styled.h3`
	margin-bottom: 0.5rem;
`;

const SubTitle = styled.h4`
	color: #6f6f6f;
	margin-bottom: 1rem;
`;
