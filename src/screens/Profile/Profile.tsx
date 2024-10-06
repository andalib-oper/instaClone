import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostprofileHeader from '../../components/Headers/PostprofileHeader'
import { fontFamilyBold, fontFamilyMedium, fontScale } from '../../styles/globalStyles';
import { primary } from '../../styles/colors';
import { Image } from 'react-native';

const Profile = () => {
      const items = Array.from({length: 100}, (_, index) => index + 1);
  return (
    <View style={styles.container}>
      <PostprofileHeader />
      <View style={styles.mainContainer}>
      <View>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quidem necessitatibus! Laudantium quae ea, esse iure suscipit aut
          totam aperiam perferendis ullam commodi recusandae accusamus hic est
          deleniti cupiditate placeat.
        </Text>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.grid_photo}>
          {items.map((item, index) => (
            <Image
              key={index}
              source={require('../../assets/avatar.png')}
              style={styles.image_grid}
            />
          ))}
        </View>
      </ScrollView>
      </View>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  username: {
    fontFamily: fontFamilyBold,
    fontSize: 18 / fontScale,
    color: primary,
    marginVertical: 6,
  },
  description: {
    fontSize: 16 / fontScale,
    color: '#888',
    fontFamily: fontFamilyMedium,
  },
  grid_photo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 16,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  image_grid: {
    width: 105,
    height: 105,
    marginHorizontal: 8,
    borderRadius: 8,
    resizeMode: 'contain',
    backgroundColor: '#f2f9fd',
    margin: 12,
  },
  mainContainer:{
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
});