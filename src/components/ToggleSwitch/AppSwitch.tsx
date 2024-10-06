import { StyleSheet, Switch, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { borderColor, code_400, primary } from '../../styles/colors'
import { useMutation } from '@tanstack/react-query'
import { appNotification } from '../../apis/auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { tokenRetriever } from '../../redux/auth/actions'

const AppSwitch = ({
  onChange,
  value,
  title,
}: {
  onChange?: any;
  value?: any;
  title?:any;
}) => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const [isEnabled, setIsEnabled] = useState(value);
  const authState = useSelector((state:any)=>state.authState)
  const {mutate: app_notification_update} = useMutation({
    mutationFn: (data: any) => appNotification(data),
    onSuccess: (data: any) => {
      console.log('datata', data);
      setIsEnabled(!isEnabled);

    },
    onError: (error: any) => {
      console.log(
        'error notific profile',
        error,
        error?.response?.data?.error?.issues,
      );
    },
  });
  const toggleItem = () => {
      app_notification_update({app_notification_on: !isEnabled});
  };
  useEffect(()=>{
    setIsEnabled(value)
  },[value])
  return (
    <View>
      <Switch
        trackColor={{false: borderColor, true: primary}}
        thumbColor={isEnabled ? code_400 : primary}
        ios_backgroundColor="#959595"
        onValueChange={() => toggleItem()}
        value={isEnabled}
      />
    </View>
  );
};

export default AppSwitch

const makeStyles  =(fontScale:any) => StyleSheet.create({})