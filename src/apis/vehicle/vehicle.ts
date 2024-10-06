import axios from 'axios'
import {CAR_URL}  from '@env'
import { endpoints } from '../../endpoints';

export const getColor = async (brand: any) => {
  const res = await axios.get(`https://carapi.app/api/exterior-colors?year=2020&make=${brand}`);
  return res.data;
};

export const getAllCarBrands = async () => {
  const res = await axios.get(
    CAR_URL+endpoints?.vehicle?.brand,
  );
  return res.data;
};

export const getAllModelByBrands = async (brand:any) => {
  const res = await axios.get(
    CAR_URL + `/vehicles/GetModelsForMake/${brand}?format=json`,
  );
  return res.data;
};

export const getFuelType = async (brand: any) => {
  const res = await axios.get(
    CAR_URL + endpoints?.vehicle?.fuelType,
  );
  return res.data;
};
