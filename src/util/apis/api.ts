import axios from 'axios';
import { getApiErrorCodeType } from '../type/apiErrorType';

type MethodType = 'post' | 'get' | 'put' | 'patch' | 'delete';

const baseUrl = import.meta.env.VITE_MELLTASU_API_URL;

export class ApiError extends Error {
  constructor(statusCode: number) {
    super('');

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    const ApiErrorCode = {
      code: 'SERVERERROR',
    };

    switch (statusCode) {
      case 400:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      case 401:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      case 403:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      case 404:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      case 408:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      case 500:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      case 503:
        ApiErrorCode.code = getApiErrorCodeType(`${statusCode}`);
        break;
      default:
        break;
    }

    this.name = 'ApiError';
    this.message = ApiErrorCode.code;
  }
}

const createRequest = async (method: MethodType, url: string) => {
  try {
    const body = await axios({
      method,
      url,
    });
    return body;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      if (statusCode) {
        throw new ApiError(statusCode);
      }
    }
  }
  return {
    data: {},
  };
};

const apiRequest = async (method: MethodType, endpoint: string) => {
  const url = `${baseUrl}${endpoint}`;
  const response = await createRequest(method, url);
  return response;
};

export default apiRequest;
