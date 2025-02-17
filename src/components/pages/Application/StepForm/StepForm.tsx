import styled from 'styled-components';
import { Checkbox } from 'src/components/ui/checkbox';
import { ApplicationType } from 'src/pages/application';
import { Button } from 'src/components/ui/buttons';
import { ConsentStatus, ApplicationField } from 'src/pages/application';
import { StepButtonType } from '../Application.hook';
import { useMemo } from 'react';
import { TextInput } from 'src/components/ui/inputs';

type Props = {
	step: number;
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
	const applicationFields = [
		'프론트엔드',
		'백엔드',
		'디자인',
		'iOS',
		'안드로이드',
		'Product Owner',
	] as const;

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
		<StepFormContainer>
			{step === 1 && (
				<StepSection>
					<Title>개인정보 수집 동의</Title>
					<StepContent>
						<h4>수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내</h4>
						<h4>수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</h4>
						<h4>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</h4>
					</StepContent>
					<SubTitle>개인정보 수집 여부 동의 여부를 체크해주세요.</SubTitle>
					<CheckboxWrapper>
						<Checkbox
							onClick={() => handleClick('agree')}
							isCheck={applicationData.consentAgreed === 'agree'}
						>
							개인정보 수집 여부에 동의합니다.
						</Checkbox>
						<Checkbox
							onClick={() => handleClick('disAgree')}
							isCheck={applicationData.consentAgreed === 'disAgree'}
						>
							개인정보 수집 여부에 동의하지 않습니다.
						</Checkbox>
					</CheckboxWrapper>
				</StepSection>
			)}
			{step === 2 && (
				<StepSection>
					<Title>기본 정보</Title>
					<SubTitle>연락 가능한 정보를 입력해주세요</SubTitle>
					<TextInput
						title="성함"
						placeholder="성함을 입력해주세요"
						type="text"
						name="name"
						isRequired
						value={applicationData.name}
						onChange={handleInputChange}
					/>
					<TextInput
						title="이메일 주소"
						placeholder="예시: prography@gmail.com"
						type="email"
						name="email"
						isRequired
						value={applicationData.email}
						onChange={handleInputChange}
					/>
					<TextInput
						title="휴대폰 번호"
						placeholder="예시: 010-1234-5678"
						type="text"
						name="phoneNumber"
						isRequired
						value={applicationData.phoneNumber}
						onChange={handleInputChange}
					/>
				</StepSection>
			)}
			{step === 3 && (
				<StepSection>
					<Title>지원 정보</Title>
					<SubTitle>
						지원하고자 하는 분야를 선택해주세요 <RequiredValue>*</RequiredValue>
					</SubTitle>
					<CheckboxWrapper>
						{applicationFields.map(field => (
							<Checkbox
								key={field}
								onClick={() => handleCheckApplicationField(field)}
								isCheck={applicationData.applicationField === field}
							>
								{field}
							</Checkbox>
						))}
					</CheckboxWrapper>
				</StepSection>
			)}
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
		</StepFormContainer>
	);
};

StepForm.displayName = 'StepForm';

const StepFormContainer = styled.form`
	display: block;
`;

const StepSection = styled.div`
	margin-bottom: 2rem;
`;

const StepContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

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

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 3rem;
	gap: 3rem;
`;

const RequiredValue = styled.strong`
	color: red;
`;
