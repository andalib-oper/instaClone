// SOME OLD CODE

import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Overlay} from '@rneui/themed';
import {code_700, primary} from '../../styles/colors';
import Anticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontFamilyMedium} from '../../styles/globalStyles';

const width = Dimensions.get('screen').width;

const UploadModal = ({
  visible,
  showModal,
  onPressCamera,
  onPressGallery,
  onPressFile,
  profile,
}: {
  visible?: boolean;
  showModal?: (visible: boolean) => void;
  onPressCamera?: () => void;
  onPressGallery?: () => void;
  onPressFile?: () => void;
  profile?: boolean;
}) => {
  return (
    <Overlay
      isVisible={visible || false}
      animationType="fade"
      onBackdropPress={() => showModal && showModal(false)}
      overlayStyle={styles.overlay}
      transparent={true}>
      <View style={styles.container}>
        <Pressable
          style={styles.iconTxt}
          onPress={() => onPressGallery && onPressGallery()}>
          <Anticon
            name="folder-multiple-image"
            color={primary}
            size={32}
          />
          <Text style={styles.text}>Gallery</Text>
        </Pressable>
        <Pressable
          style={[styles.iconTxt, {marginLeft: 40}]}
          onPress={() => onPressCamera && onPressCamera()}>
          <Feather name="camera" color={primary} size={33} />
          <Text style={styles.text}>Camera</Text>
        </Pressable>
        {profile ? null : (
          <Pressable
            style={[styles.iconTxt, {marginLeft: 40, marginTop: 5}]}
            onPress={() => onPressFile && onPressFile()}>
            <FontAwesome name="file-pdf-o" color={code_700} size={30} />
            <Text style={styles.text}>File</Text>
          </Pressable>
        )}
      </View>
    </Overlay>
  );
};

export default UploadModal;

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    position: 'relative',
    width,
    backgroundColor: '#7F000000',
  },
  container: {
    bottom: 0,
    height: 150,
    backgroundColor: 'white',
    position: 'absolute',
    width,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 32,
  },
  text: {color: code_700, fontFamily: fontFamilyMedium},
  iconTxt: {alignItems: 'center'},
});
