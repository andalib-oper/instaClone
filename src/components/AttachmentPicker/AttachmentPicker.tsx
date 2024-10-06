import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Linking,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {code_700, primary} from '../../styles/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadModal from '../modals/UploadModal';
import {fontFamilyMedium} from '../../styles/globalStyles'

const AttachmentPicker = ({
  loader,
  img,
  setImg,
  deleteImage,
  show,
  profile,
}: {
  loader: boolean;
  img: any;
  setImg: any;
  deleteImage: any;
  show: boolean;
  profile?: boolean;
}) => {
  const [showModal, setShowModal] = useState(false);
  const onCapture = async () => {
    let option = {
      mediaType: 'photo',
      includeBase64: false,
      selectionLimit: 10,
      saveToPhotos: true,
      maxWidth: 300,
      maxHeight: 300
    };
    const result = await launchImageLibrary(option);
    if (result?.assets.length > 1) {
      setImg(result?.assets?.map((item)=> {
        // return `data:image/png;base64,${item?.base64}`;
        return item?.uri
      }));
      setShowModal(false);
    } else {
      ToastAndroid.show('Please select atleast 2 images', ToastAndroid.LONG);
    }
  };
  const onCaptureCamera = async () => {
    let option = {
      mediaType: 'photo',
      includeBase64: false,
      maxWidth: 300,
      maxHeight: 300,
    };
    const result = await launchCamera(option);
    setImg(
      result?.assets?.map(item => {
        // return `data:image/png;base64,${item?.base64}`;
        return item?.uri
      }),
    );
    setShowModal(false);
  };
  return (
    <View>
      <View style={[styles.imageContainer, {paddingHorizontal: show ? 0 : 0}]}>
        {show ? null : (
          <TouchableOpacity
            style={styles.imageInnerContainer}
            onPress={() => {
              setShowModal(true);
            }}>
            <AntDesign name="camera" size={24} color={primary}/>
          </TouchableOpacity>
        )}
        {loader ? (
          <ActivityIndicator size={24} color={code_700} />
        ) : (
          <>
            {img !== undefined &&
              img.map((item: any) => {
                return (
                  <TouchableOpacity onPress={() => Linking.openURL(item)}>
                    <ImageBackground
                      source={{
                        uri: item,
                      }}
                      borderRadius={8}
                      style={[
                        styles.imageInnerContainer,
                        {
                          // borderColor: primary,
                          marginHorizontal: show ? 0 : 3,
                          paddingHorizontal: show ? 0 : 10,
                          marginRight: show ? 0 : 10,
                          borderWidth: 0,
                          justifyContent:'space-between',
                          elevation:5,backgroundColor:'#fff'
                        },
                      ]}>
                      {show ? null : (
                        <TouchableOpacity
                          onPress={() => deleteImage(item)}
                          style={{
                            backgroundColor: '#fff',
                            borderRadius: 100 / 2,
                            position: 'absolute',
                            right: -10,
                            top: -10,
                          }}>
                          <AntDesign
                            name="closecircle"
                            size={24}
                            color={'red'}
                          />
                        </TouchableOpacity>
                      )}
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
          </>
        )}
      </View>
      {showModal && (
        <UploadModal
          visible={showModal}
          showModal={setShowModal}
          onPressCamera={onCaptureCamera}
          onPressGallery={onCapture}
          onPressFile={()=>{}}
          profile={profile}
        />
      )}
    </View>
  );
};

export default AttachmentPicker;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    gap: 10,
    flexWrap:'wrap'
  },
  imageInnerContainer: {
    borderWidth: 1,
    borderColor: primary,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginRight: 3,
    marginVertical: 10,
    borderRadius: 8,
  },
  uploadImage: {
    height: 32,
    width: 50,
  },
  uploadText: {
    fontFamily: fontFamilyMedium,
    fontSize: 13,
    fontWeight: '600',
    color: code_700,
  },
});
