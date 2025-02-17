import { useMemo, useState, useEffect, ChangeEvent } from 'react';
import { useCallback } from 'react';
import { ApplicationType } from 'src/pages/application';
import { ConsentStatus, ApplicationField } from 'src/pages/application';

export type StepButtonType = 'prev' | 'next';

export const useApplication = () => {
	const [step, setStep] = useState<number>(1);
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

	const handleClick = useCallback((option: ConsentStatus) => {
		setApplicationData(prev => ({
			...prev,
			consentAgreed: prev.consentAgreed === option ? null : option,
		}));
	}, []);

	const handleStepClick = useCallback(
		(type: StepButtonType) => {
			if (
				applicationData.consentAgreed === null ||
				applicationData.consentAgreed === 'disAgree'
			) {
				alert('개인정보수집 동의를 체크해야만 다음으로 갈 수 있습니다.');
				return;
			}

			setStep(prev => {
				return type === 'next' ? prev + 1 : prev - 1;
			});
		},
		[applicationData]
	);

	// input값 입력에 따른 change
	const handleInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			setApplicationData(prev => ({
				...prev,
				[name]: value,
			}));
		},
		[]
	);

	const handleCheckApplicationField = useCallback(
		(option: ApplicationField) => {
			setApplicationData(prev => ({
				...prev,
				applicationField: prev.applicationField === option ? null : option,
			}));
		},
		[]
	);

	const handleSubmit = useCallback((event: React.FormEvent) => {
		event.preventDefault();
	}, []);

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
		handleClick,
		handleStepClick,
		handleSubmit,
		handleInputChange,
		handleCheckApplicationField,
	};
};
