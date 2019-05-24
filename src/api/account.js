import http from '@/utils/request';
import { API_ORIGIN } from '@/config';

export const login = (data) => {
  const url = `${API_ORIGIN}/account/login`;

  return http.post({
    url,
    data,
  });
};
