import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {fontFamilyBold, fontFamilyRegular} from '../../styles/globalStyles';
import {code_100, code_200} from '../../styles/colors';
import CustomButton from '../../components/ui/CustomButton';
import {useDispatch} from 'react-redux';
import {reqSuccess} from '../../redux/auth/actions';

const Onboarding = () => {
  const {fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/onboarding.png')}
        style={{flex: 1}}
        resizeMode="stretch">
        <View style={styles.bottomContainer}>
          <Text style={styles.header_txt}>My Service</Text>
          <Text style={styles.sub_txt}>
            Lorem ipsum dolor sit amet consectetur. At tellus scelerisque
            tincidunt ornare.
          </Text>
          <CustomButton
            onPress={() => {
              dispatch(reqSuccess());
            }}
            title={'Get Started'}
            variant="secondary"
            style={{marginTop: '8%', width: width / 1.1}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
const {width, height} = Dimensions.get('window');
const makeStyles = (fontScale: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 50,
      width: width / 1,
      padding: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header_txt: {
      fontSize: 28 / fontScale,
      fontFamily: fontFamilyBold,
      color: code_100,
    },
    sub_txt: {
      fontSize: 16 / fontScale,
      fontFamily: fontFamilyRegular,
      color: code_200,
      marginTop: 5,
      textAlign: 'center',
    },
  });
