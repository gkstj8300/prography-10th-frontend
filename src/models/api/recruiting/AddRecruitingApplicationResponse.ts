import { RecruitingApiResponse } from './RecruitingApiResponse';

export interface AddRecruitingApplicationResponse
	extends RecruitingApiResponse {
	status?: string;
	message?: string;
}
