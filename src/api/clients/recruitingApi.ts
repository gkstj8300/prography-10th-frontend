import axios, { AxiosResponse, CancelToken } from 'axios';
import { validateStatus } from '../utils/validateStatus';
import { RecruitingApiReqeust } from 'src/models/api/recruiting/RecruitingApiReqeust';
import { RecruitingApiResponse } from 'src/models/api/recruiting/RecruitingApiResponse';
import { ApiError } from 'src/errors/RecruitingApiError';

/** request timeout (ms) */
const timeout = 29000;

type RequestOptions = {
	/** cancel token */
	cancelToken?: CancelToken;
};

const generateApi = () => {
	/**
	 * POST
	 * @param {string} url - url
	 * @param {T} request - request body
	 * @param {RequestOptions} [options] - http request options
	 * @returns {Promise<R>} - response
	 */
	async function post<
		T extends RecruitingApiReqeust,
		R extends RecruitingApiResponse
	>(url: string, reqeust: T, options?: RequestOptions): Promise<R> {
		return axios
			.create({
				baseURL: '', // 리쿠르팅 관련 url 삽입
				timeout,
				validateStatus,
			})
			.post<T, AxiosResponse<R>>(url, reqeust, {
				cancelToken: options?.cancelToken,
			})
			.then(reponse => reponse.data)
			.catch(error => {
				throw new ApiError(error);
			});
	}

	/**
	 * GET
	 * @param {string} url - url
	 * @param {T} [request] - get parameters
	 * @returns {Promise<R>} response
	 */
	async function get<
		T extends RecruitingApiReqeust,
		R extends RecruitingApiResponse
	>(url: string, reqeust: T, options?: RequestOptions): Promise<R> {
		return axios
			.create({
				baseURL: '', // 리쿠르팅 관련 url 삽입
				timeout,
				validateStatus,
			})
			.get(url, {
				params: { ...reqeust },
				cancelToken: options?.cancelToken,
			})
			.then(response => response.data)
			.catch(error => {
				throw new ApiError(error);
			});
	}
	return { post, get };
};

export const recruitingApi = generateApi();
