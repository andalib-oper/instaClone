import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { fontFamilyMedium, fontScale } from '../../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import { borderColor } from '../../styles/colors';

const PostHeader = ({title, profileImage}: {title: any; profileImage?:any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Image
          source={{uri: profileImage}}
          style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Feather
          name="more-horizontal" color={'#000'} size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 100 / 2,
    resizeMode: 'contain',
    borderColor: borderColor,
    borderWidth:2,
  },
  imageStory: {
    width: 45,
    height: 45,
    borderRadius: 100 / 2,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: 14 / fontScale,
    fontFamily: fontFamilyMedium,
    color: '#000',
  },
});