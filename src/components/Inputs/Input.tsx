import {StyleSheet, Text, View, TextInput, useWindowDimensions,TouchableOpacity, KeyboardTypeOptions, Dimensions} from 'react-native';
import React, { useState } from 'react';
import {borderColor, code_400, code_600, code_700, primary} from '../../styles/colors';
import { Styles, fontFamilyBold, fontFamilyMedium, fontFamilyRegular } from '../../styles/globalStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface InputProps {
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  value: string;
  style?: any;
  placeholder?: string;
  multiline?: boolean;
  onFocus?: () => void;
  secureTextEntry?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  defaultValue?: string;
  editable?: boolean;
  autoCorrect?: boolean;
  phone?: () => void;
  countryCode?: string;
  label?: String;
  noLabel?: Boolean;
  width_?: any;
  boxHeight?: number;
  fullLength?: Boolean;
  longText?: Boolean;
  isClock?: Boolean;
  isRupee?: Boolean;
  isDate?: Boolean;
  isKM?:Boolean
}

const Input = ({
  keyboardType,
  onChangeText,
  value,
  style,
  isKM,
  placeholder,
  multiline,
  onFocus,
  secureTextEntry,
  numberOfLines,
  maxLength,
  textAlignVertical,
  defaultValue,
  editable = true,
  autoCorrect,
  phone,
  countryCode,
  label,
  noLabel,
  width_,
  fullLength,
  longText,
  isClock,
  isRupee,
  isDate,
}: InputProps) => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const [boxHeight, setBoxHeight] = useState(50);
  return (
    <View>
      {!noLabel && <Text style={Styles.fieldLabel}>{label}</Text>}
      <View
        style={[
          styles.inputBox,
          {
            backgroundColor:
              !editable && !isDate && !isClock && !isKM && !isRupee
                ? '#efefef'
                : 'white',
            borderColor: !editable ? borderColor : borderColor,
            width: width_ ? width_ : fullLength ? '100%' : (width - 88) / 2,
            height:
              longText && boxHeight < 100
                ? 150
                : boxHeight > 50
                ? boxHeight
                : 50,
            borderRadius: 8,
          },
          style,
        ]}>
        {phone && (
          <TouchableOpacity onPress={phone}>
            <Text style={styles.phoneNumberStyle}>{countryCode}</Text>
          </TouchableOpacity>
        )}
        <TextInput
          style={{
            width:
              parseInt(width_) > 0
                ? parseInt(width_) - 48
                : isDate || isClock || isRupee || isKM
                ? '80%'
                : width - 50,
            fontSize: 16 / fontScale,
            fontFamily: fontFamilyMedium,
            // lineHeight: 16 * 1.25,
            textAlignVertical: !longText ? 'center' : 'top',
            height:
              longText && boxHeight < 100
                ? 150
                : boxHeight > 50
                ? boxHeight
                : 50,
            color: !editable ? code_700 : 'black',
            paddingHorizontal: 16,
          }}
          maxLength={maxLength}
          onContentSizeChange={event => {
            const {contentSize} = event.nativeEvent;
            setBoxHeight(contentSize.height);
          }}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          onFocus={onFocus}
          editable={isDate || isClock ? false : editable}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : undefined}
          placeholder={placeholder}
          defaultValue={defaultValue}
          placeholderTextColor={code_400}
          secureTextEntry={secureTextEntry}
          textAlignVertical={textAlignVertical}
          autoCorrect={autoCorrect}
          autoCapitalize="none"
        />
        {isClock && <AntIcon name="clockcircle" size={20} color={primary} />}
        {isDate && <AntIcon name="calendar" size={20} color={primary} />}
        {isKM && (
          <Text
            style={{
              fontFamily: fontFamilyBold,
              color: primary,
              fontSize: 16 / fontScale,
              marginRight: 10,
            }}>
            KM
          </Text>
        )}
      </View>
    </View>
  );
};

export default Input;
const {width} = Dimensions.get('window')
const makeStyles = (fontScale: any) =>
  StyleSheet.create({
    input: {
      fontFamily: fontFamilyRegular,
      color: '#000',
      fontSize: 16/fontScale,
      width: width/1.33,
      textAlignVertical: 'center',
      alignSelf:'center',
      marginTop:2
    },
    inputBox: {
      borderRadius: 0,
      borderColor: borderColor,
      fontFamily: fontFamilyRegular,
      color: code_700,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
    },
    phoneNumberStyle: {
      paddingLeft: 10,
      fontFamily: fontFamilyRegular,
      fontSize: 16 / fontScale,
      color: '#000',
    },
  });
