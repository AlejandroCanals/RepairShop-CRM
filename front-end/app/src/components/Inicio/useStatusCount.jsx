import { useState, useEffect } from 'react';
import axios from 'axios';

export function useStatusCounts() {
  const [statusCounts, setStatusCounts] = useState({
    received_count: 0,
    in_repair_count: 0,
    repaired_count: 0,
  });

  const StatusCount = axios.create({
    baseURL: 'http://127.0.0.1:8000/app/',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StatusCount.get('status_count/');
        setStatusCounts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return { statusCounts };
}

