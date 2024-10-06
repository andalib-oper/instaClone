import {BASE_URL} from '@env';
import axios from 'axios';
import {endpoints} from '../../endpoints';

export const signup_login = async (body: any) => {
  const res = await axios.post(BASE_URL + endpoints?.auth?.sign_up, body);
  return res.data;
};

export const verifyOtp = async (body: any) => {
  const res = await axios.post(BASE_URL + endpoints?.auth?.verify_otp, body);
  return res.data;
};

export const resendOtp = async (body: any) => {
  const res = await axios.post(BASE_URL + endpoints?.auth?.resend_otp, body);
  return res.data;
};

export const sendToken = async (body: any) => {
  const res = await axios.patch(BASE_URL + endpoints?.auth?.register_token, body);
  return res.data;
};

export const appNotification = async (body: any) => {
  console.log("body", body)
  const res = await axios.patch(
    BASE_URL + endpoints?.auth?.app_notification,
    body,
  );
  return res.data;
};

export const getProfile = async () => {
  const res = await axios.get(BASE_URL + endpoints?.auth?.get_profile);
  return res.data;
};

export const profileUpdate = async (body: any) => {
  const res = await axios.patch(BASE_URL + endpoints?.auth?.update_profile, body);
  return res.data;
};

export const addBookingImage = async (body: any) => {
  const res = await axios.post(
    BASE_URL + endpoints?.auth?.booking_image,
    body,
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.get(BASE_URL + endpoints?.auth?.logout);
  return res.data;
};
