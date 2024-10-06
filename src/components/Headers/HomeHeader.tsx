import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {borderColor, code_700} from '../../styles/colors';
import {fontFamilyMedium} from '../../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {AddIcon, Logo} from '../../assets';

const HomeHeader = () => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('createPost');
          }}>
          <AddIcon height={27} width={27} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/elegant-woman-traditional-attire_1308-173325.jpg?t=st=1728210834~exp=1728214434~hmac=3f1293dacdb4d038c122cdffcdd19f742548a9f5187a4225ef2ec687d96b20a2&w=360',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
const {width} = Dimensions.get('window');
const makeStyles = (fontScale: any) =>
  StyleSheet.create({
    container: {
      width: width / 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 16,
      alignItems: 'center',
      alignSelf:'center',
      backgroundColor: '#fff',
      elevation:4
    },
    image: {
      width: 35,
      height: 35,
      borderRadius: 100 / 2,
      resizeMode: 'contain',
      elevation: 5,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderWidth: 1,
      borderColor: borderColor,
      padding: 8,
    },
    innerContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    }
  });
