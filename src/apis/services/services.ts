import axios from 'axios';
import {BASE_URL} from '@env';
import {endpoints} from '../../endpoints';

export const getAllServices = async () => {
  const res = await axios.get(BASE_URL + endpoints?.services?.get_all_services);
  return res.data;
};