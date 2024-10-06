import axios from 'axios';
import {BASE_URL} from '@env';
import {endpoints} from '../../endpoints';

export const addOrder = async (body:any) => {
  const res = await axios.post(BASE_URL + endpoints?.orders?.create_order,body);
  return res.data;
};

export const getOrderByStatus = async (status:any) => {
  const res = await axios.get(BASE_URL + endpoints?.orders?.get_order_history_by_order_status + status);
  return res.data;
};

export const getCompletedOrder = async (id:any) => {
  const res = await axios.get(
    BASE_URL + endpoints?.orders?.get_completed_order_details+ id,
  );
  return res.data;
};


