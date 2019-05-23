import http from '@/utils/request';

export const login = (data) => {
  const url = '/account/login';

  return http.post({
    url,
    data,
  });
};
