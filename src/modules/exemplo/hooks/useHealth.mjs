import { useEffect, useState } from 'react';
import api from '@/api/apiClient';

export default function useHealth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/health')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return data;
}