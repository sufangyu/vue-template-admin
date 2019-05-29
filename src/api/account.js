import http from '@/utils/request';
import { API_BASE } from '@/config';


export const loginByUsername = (data) => {
  const url = `${API_BASE}/account/login`;

  return http.post({
    url,
    data,
  });
};


export const getUserInfo = (params = {}) => {
  const url = `${API_BASE}/account/user`;

  return http.get({
    url,
    params,
  });
};


export const logout = (data) => {
  const url = `${API_BASE}/account/logout`;

  return http.post({
    url,
    data,
  });
};
