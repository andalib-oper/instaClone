import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  fontFamilyBold,
  fontFamilyMedium,
  fontScale,
} from '../../styles/globalStyles';
import {primary} from '../../styles/colors';

const PostprofileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.profile_image}
        />
        <View style={styles.post_follower_container}>
          <View>
            <Text style={styles.text}>123</Text>
            <Text style={styles.subtext}>Posts</Text>
          </View>
          <View>
            <Text style={styles.text}>132</Text>
            <Text style={styles.subtext}>Followers</Text>
          </View>
          <View>
            <Text style={styles.text}>154</Text>
            <Text style={styles.subtext}>Followings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostprofileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  post_follower_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  profile_image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16 / fontScale,
    color: '#000',
    fontFamily: fontFamilyBold,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14 / fontScale,
    color: '#888',
    fontFamily: fontFamilyMedium,
    textAlign: 'center',
  },
});
