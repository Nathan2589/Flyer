// services/transportAPI.ts
import axios from 'axios';
import { Vehicle } from '../types';

const API_BASE_URL = 'YOUR_IRISH_TRANSPORT_API_ENDPOINT';

export const fetchTransportData = async (): Promise<Vehicle[]> => {
  try {
    const response = await axios.get<Vehicle[]>(`${API_BASE_URL}/realtime`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transport data:', error);
    return [];
  }
};