import http from '@/utils/request';
import { API_BASE } from '@/config';


export const getUnreadMesages = () => {
  const url = `${API_BASE}/global/messages/unread`;

  return http.get({
    url,
  });
};
