import http from '@/utils/request';
import { API_BASE } from '@/config';


export const loginByUsername = (data) => {
  const url = `${API_BASE}/account/login`;

  return http.post({
    url,
    data,
  });
};


export const logout = (data) => {
  const url = `${API_BASE}/account/logout`;

  return http.post({
    url,
    data,
  });
};
