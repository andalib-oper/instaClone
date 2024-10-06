import { getProfile, logoutUser } from '../../apis/auth/auth';
import {
  REQ,
  REQ_SUCCESS,
  SET_NEW_AUTH_TOKEN,
  REQ_FAILURE,
  LOGOUT,
  NET_CHECK,
  FOLLOWING,
} from './actionTypes';
import EncryptedStorage from 'react-native-encrypted-storage';

export const reqSuccess = (
) => ({
  type: REQ_SUCCESS,
});
export const reqFailure = (error: any) => ({
  type: REQ_FAILURE,
  error: error,
});
export const logout = () => ({type: LOGOUT});

export const tokenRetriever = (notificationToken: any) => {
  return async (dispatch: any) => {
   
  };
};

export const logUserOut = () => {
  console.log('logging out');
  return async (dispatch:any) => {
    try {
      await EncryptedStorage.removeItem('a2zCarsToken');
      logoutUser().then(()=>{
        dispatch(logout());
      })
      console.log('Encrypted Storage emptied!');
    } catch (err) {
      console.log('unable to logout: ', err.message);
      dispatch(reqFailure(err.message));
    }
  };
};
