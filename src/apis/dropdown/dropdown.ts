import axios from 'axios';
import {BASE_URL} from '@env';
import {endpoints} from '../../endpoints';

export const getAllServicesDropdown = async () => {
  const res = await axios.get(BASE_URL + endpoints?.dropdown?.service_dropdown);
  return res.data;
};

export const getAllVehiclesDropdown = async () => {
  const res = await axios.get(BASE_URL + endpoints?.dropdown?.vehicle_dropdown);
  return res.data;
};
