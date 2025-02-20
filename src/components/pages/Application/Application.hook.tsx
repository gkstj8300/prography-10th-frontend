import { useMemo, useState, useEffect, ChangeEvent } from 'react';
import { useCallback } from 'react';
import { ApplicationType } from 'src/pages/application';
import { ConsentStatus, ApplicationField } from 'src/pages/application';
import { addRecruiting } from 'src/api/services/addRecruiting';

export type StepType = number | 'submit';
export type StepButtonType = 'prev' | 'next';

export const useApplication = () => {
	const [step, setStep] = useState<StepType>(1);
	const [applicationData, setApplicationData] = useState<ApplicationType>({
		consentAgreed: null,
		name: '',
		email: '',
		phoneNumber: '',
		applicationField: null,
	});

	const stepsTitle: string[] = useMemo(
		() => ['개인정보 수집 동의', '기본 정보', '지원 정보'],
		[]
	);

	// 개인정보 수집 Click 이벤트
	const handleClickAgreement = useCallback((option: ConsentStatus) => {
		setApplicationData(prev => ({
			...prev,
			consentAgreed: prev.consentAgreed === option ? null : option,
		}));
	}, []);

	// 다음 Step Click 이벤트
	const handleStepClick = useCallback(
		(type: StepButtonType) => {
			const { consentAgreed, name, email, phoneNumber } = applicationData;

			const isStepOneInvalid =
				step === 1 && (consentAgreed === null || consentAgreed === 'disAgree');
			const isStepTwoInvalid = step === 2 && (!name || !email || !phoneNumber);

			if (isStepOneInvalid) {
				alert('개인정보수집 동의를 체크해야만 다음으로 갈 수 있습니다.');
				return;
			}

			if (isStepTwoInvalid) {
				alert('필수 값을 입력하셔야 합니다.');
				return;
			}

			setStep(prev => (type === 'next' ? Number(prev) + 1 : Number(prev) - 1));
		},
		[applicationData]
	);

	// 기본 정보(이름, 이메일, 전화번호) Chnage 이벤트
	const handleInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;

			if (name === 'name' && /\d/.test(value)) {
				return;
			}

			if (name === 'phoneNumber' && value.replaceAll('-', '').length > 11) {
				return;
			}

			setApplicationData(prev => ({
				...prev,
				[name]: value,
			}));
		},
		[]
	);

	// 지원 분야 Check 이벤트
	const handleCheckApplicationField = useCallback(
		(option: ApplicationField) => {
			setApplicationData(prev => ({
				...prev,
				applicationField: prev.applicationField === option ? null : option,
			}));
		},
		[]
	);

	// 제출하기 이벤트
	const handleSubmit = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			try {
				await addRecruiting(applicationData);
				setStep('submit');
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error('Recruiting error:', error);
				setStep('submit'); // 임시 submit set code
			}
		},
		[applicationData, setStep]
	);

	// 휴대폰 번호 하이픈 자동완성
	useEffect(() => {
		if (applicationData.phoneNumber.length === 11) {
			setApplicationData(prev => ({
				...prev,
				phoneNumber: applicationData.phoneNumber.replace(
					/(\d{3})(\d{4})(\d{4})/,
					'$1-$2-$3'
				),
			}));
		} else if (applicationData.phoneNumber.length === 13) {
			setApplicationData(prev => ({
				...prev,
				phoneNumber: applicationData.phoneNumber
					.replace(/-/g, '')
					.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
			}));
		}
	}, [applicationData.phoneNumber]);

	return {
		step,
		stepsTitle,
		applicationData,
		handleClickAgreement,
		handleStepClick,
		handleSubmit,
		handleInputChange,
		handleCheckApplicationField,
	};
};
