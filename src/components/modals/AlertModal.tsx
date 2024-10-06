import {StyleSheet, useWindowDimensions, View,Text} from 'react-native';
import PropTypes from 'prop-types';

import {Overlay} from '@rneui/themed';

import CustomButton from '../../components/ui/CustomButton';

import {black} from '../../styles/colors';
import {fontFamilyBold, fontFamilyRegular} from '../../styles/globalStyles';

const AlertModal = ({
  visible,
  onHide,
  title,
  comments,
  children,
  onSubmit,
  cancel,
  hideText = '', // Provide a default value for hideText
  confirmText,
  successModal,
  approval
}: {
  visible: boolean;
  onHide?: () => void;
  title: string;
  comments: string;
  children?: React.ReactNode;
  onSubmit: () => void;
  cancel?: boolean;
  hideText?: string;
  confirmText: string;
  successModal?: boolean;
  approval?: boolean
}) => {
  const {width, height, fontScale} = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <Overlay isVisible={visible} overlayStyle={{borderRadius: 10}}>
      <View style={[styles.container, {width: width - 100}]}>
        <View style={styles.iconContainer}>
        
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.comment}>{comments}</Text>
          {children}
        </View>
        {cancel ? (
          <View style={styles.twoBtn}>
            <CustomButton
              title={hideText}
              onPress={() => onHide && onHide()}
              variant="secondary"
              loading={false}
              style={{width: width / 3}}
            />
            <CustomButton
              title={confirmText}
              onPress={() => onSubmit()}
              variant="primary"
              loading={false}
              style={{width: width / 3}}
            />
          </View>
        ) : (
          <CustomButton
            title={confirmText}
            onPress={() => onSubmit()}
            variant="primary"
            loading={false}
            style={{width: width / 1.5}}
          />
        )}
      </View>
    </Overlay>
  );
};

AlertModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  title: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  cancel: PropTypes.bool,
  hideText: PropTypes.string,
  confirmText: PropTypes.string.isRequired,
  successModal: PropTypes.bool,
};

export default AlertModal;

const makeStyles = (fontScale:any) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 24,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
    },
    title: {
      color: black,
      fontSize: 20 / fontScale,
      marginBottom: 8,
      lineHeight: 20 * 1.25,
      fontFamily: fontFamilyBold
    },
    comment: {
      fontWeight: '400',
      textAlign: 'center',
      color: '#646464',
      paddingHorizontal: 2,
      fontSize: 16/fontScale,
      fontFamily: fontFamilyRegular,
      marginTop: '5%',
      lineHeight: 28
    },
    twoBtn: {flexDirection: 'row', gap: 16},
  });
