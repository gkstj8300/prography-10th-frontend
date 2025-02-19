import { AxiosError } from 'axios';
import { ApiErrorResponse } from 'src/models/api/ApiErrorResponse';

/**
 * ApiError API error
 */
export class ApiError extends Error {
	response?: ApiErrorResponse;

	constructor(error: AxiosError<ApiErrorResponse>) {
		super(error.message);
		this.name = 'ApiError';
		this.response = error.response?.data;
	}
}
