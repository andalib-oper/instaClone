import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WithSplashScreen} from './screens/onboarding/Splash';
import {useDispatch, useSelector} from 'react-redux';
import LoginStack from './navigation/Loginstack';
import HomeStack from './navigation/HomeStack';

const Config = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const authState = useSelector((state:any)=>state.authState)
  const dispatch =useDispatch()
  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <NavigationContainer>
       {authState?.isLoggedIn?<HomeStack/>:<LoginStack/>}
      </NavigationContainer>
    </WithSplashScreen>
  );
};

export default Config;
