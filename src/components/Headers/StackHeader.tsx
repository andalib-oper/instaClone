import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {borderColor, code_700} from '../../styles/colors';
import {fontFamilyMedium} from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

const StackHeader = ({title, rightIcon}: {title: any; rightIcon?: any}) => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back_btn_container}
        onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          color={code_700}
          size={22}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View style={styles.header_txt_container}>
        <Text style={styles.header_txt}>{title}</Text>
      </View>
      {rightIcon ? (
        rightIcon
      ) : (
        <>
          <View />
          <View />
        </>
      )}
    </View>
  );
};

export default StackHeader;
const {width} = Dimensions.get('window');
const makeStyles = (fontScale: any) =>
  StyleSheet.create({
    container: {
      width: width / 1,
      backgroundColor: '#fff',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    back_btn_container: {
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 100 / 2,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header_txt_container: {
      alignSelf: 'center',
      marginLeft: '5%',
    },
    header_txt: {
      fontSize: 24 / fontScale,
      fontFamily: fontFamilyMedium,
      color: code_700,
      textAlign: 'center',
    },
  });
