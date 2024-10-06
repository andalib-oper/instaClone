import axios from 'axios'
import {BASE_URL} from '@env'
import { endpoints } from '../../endpoints';


export const getAllCars = async () => {
  const res = await axios.get(BASE_URL + endpoints?.cars?.get_car);
  return res.data;
};
export const addCars = async (body: any) => {
    console.log("body", body)
  const res = await axios.post(BASE_URL + endpoints?.cars?.add_car, body);
  return res.data;
};
export const getAllCarsById = async (id:any) => {
  const res = await axios.get(BASE_URL + endpoints?.cars?.get_car_by_id+id);
  return res.data;
};
export const editCars = async (body: any) => {
  console.log('body', body);
  const res = await axios.patch(BASE_URL + endpoints?.cars?.update_car, body);
  return res.data;
};

export const deleteCars = async (id: any) => {
  const res = await axios.delete(BASE_URL + endpoints?.cars?.delete_car+id);
  return res.data;
};
