import { networkClient } from './network-client';
import { APIStatusCode } from '../api/models/api-status-code';
import { APIResponse } from '../api/models/api-response';

import type { AxiosRequestConfig } from 'axios';

class ApiClient {
  async get<T>(endpoint: string, config?: AxiosRequestConfig) {
    const response = await networkClient.get<APIResponse<T>>(endpoint, config)
    
    if (response.status !== APIStatusCode.SUCCESS) {
      throw new Error('Error en la petición')
    }
    
    return response.data
  }
}

export const apiClient = new ApiClient()