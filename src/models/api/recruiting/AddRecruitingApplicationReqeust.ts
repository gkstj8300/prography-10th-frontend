import { RecruitingApiReqeust } from './RecruitingApiReqeust';
import {
	ConsentStatus,
	ApplicationField,
} from 'src/pages/application/Application.types';

export interface AddRecruitingApplicationReqeust extends RecruitingApiReqeust {
	consentAgreed: ConsentStatus; // 개인정보 수집 동의 여부
	name: string; // 성함
	email: string; // 이메일
	phoneNumber: string; // 휴대폰 번호
	applicationField: ApplicationField; // 지원 분야
}
