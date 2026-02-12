import type { ErrorMessageKey, ErrorMessageValue, HttpMethod } from '@/types';
import { ENV_CONFIG } from '@/utils/configs';
import { ERROR_MESSAGES, LOCAL_STORAGE_KEY, METHODS } from '@/utils/constants';
import { getLocalStorage } from '@/utils/functions/local-storage';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = ENV_CONFIG.API_BASE_URL;
const DEFAULT_PREFIX = '/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL + DEFAULT_PREFIX,
  withCredentials: false,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getLocalStorage<string>(LOCAL_STORAGE_KEY);

  if (token) {
    config.headers = config.headers ?? {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network / CORS / timeout / offline
    if (!error.response) {
      return Promise.reject({
        status: null,
        message: ERROR_MESSAGES.network,
      });
    }

    const { status, data } = error.response as {
      status: number;
      data?: { message?: string };
    };

    const message: ErrorMessageValue =
      data?.message ||
      (ERROR_MESSAGES[status as ErrorMessageKey] ?? ERROR_MESSAGES.common);

    const customError = {
      status,
      message,
      data,
    };

    if (status === 401) {
      localStorage.clear();
      // emit auth:logout event (UI decides redirect)
    }

    return Promise.reject(customError);
  },
);

type ClientRequest<TPayload = unknown> = {
  method?: HttpMethod;
  url: string;
  data?: TPayload;
  params?: Record<string, unknown>;
  headers?: AxiosRequestConfig['headers'];
  signal?: AbortSignal;
};

const client = async <TResponse = unknown, TPayload = unknown>(
  config: ClientRequest<TPayload>,
): Promise<TResponse> => {
  const { method = METHODS.GET, url, data, params, headers, signal } = config;

  const response: AxiosResponse<TResponse> = await axiosInstance({
    method,
    url,
    data,
    params,
    headers,
    signal,
  });

  return response.data;
};

export default client;
