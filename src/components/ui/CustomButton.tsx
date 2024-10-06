import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {code_700, primary, white} from '../../styles/colors';
import {Styles} from '../../styles/globalStyles';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: string;
  loading?: boolean;
  style?: any;
  disable?: boolean;
  google?: boolean;
  btnText?: any
};

const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  style,
  disable,
  google,
  btnText,
}: CustomButtonProps) => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale, variant);

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryBtn;
      case 'secondary':
        return styles.secondaryBtn;
      case 'danger':
        return styles.dangerBtn;
      default:
        return styles.primaryBtn;
    }
  };

  const renderButtonContent = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    } else {
      return (
        <>
         
            <Text style={[styles.btnText, btnText]}>{title}</Text>
        </>
      );
    }
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disable}>
      {google ? (
        <View style={[Styles.btn, getButtonStyle(), style]}>
          {renderButtonContent()}
        </View>
      ) : variant === 'secondary' ? (
        <View style={[Styles.btn, getButtonStyle(), style]}>
          {renderButtonContent()}
        </View>
      ) : (
        <View style={[Styles.btn, getButtonStyle(), style]}>
          {renderButtonContent()}
        </View>
      )}
    </TouchableOpacity>
  );
};

const makeStyles = (fontScale: number, variant: string) =>
  StyleSheet.create({
    primaryBtn: {
      backgroundColor: primary,
    },
    secondaryBtn: {
      backgroundColor: white,
      borderWidth: 1,
      borderColor: primary,
    },
    dangerBtn: {
      backgroundColor: '#FF3B30',
    },
    btnText: {
      color: variant === 'primary' ? white : variant === 'secondary'?primary:code_700,
      fontSize: 16 / fontScale,
      fontFamily: 'Inter-Bold',
    },
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default CustomButton;
