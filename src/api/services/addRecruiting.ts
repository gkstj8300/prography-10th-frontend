import { CancelToken } from 'axios';
import { recruitingApi } from '../clients/recruitingApi';
import { AddRecruitingApplicationReqeust } from 'src/models/api/recruiting/AddRecruitingApplicationReqeust';
import { AddRecruitingApplicationResponse } from 'src/models/api/recruiting/AddRecruitingApplicationResponse';

/**
 * { 개인정보, 기본 정보, 지원 정보 } 입력값 리크루팅 제출
 * @param {AddRecruitingApplicationReqeust} request
 * @param {CancelToken} cancelToken
 * @returns {Promise<AddRecruitingApplicationResponse>} AddRecruitingApplicationResponse
 */
export function addRecruiting(
	reqeust: AddRecruitingApplicationReqeust,
	cancelToken?: CancelToken
): Promise<AddRecruitingApplicationResponse> {
	return recruitingApi.post('/api/addRecruiting', reqeust, { cancelToken });
}
