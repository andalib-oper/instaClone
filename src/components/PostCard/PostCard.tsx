import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostHeader from '../Headers/PostHeader';
import {ImageSlider} from 'react-native-image-slider-banner';
import PostCardBottom from './PostCardBottom';

const PostCard = React.memo(({item}: {item: any}) => {
  const Images = [
    'https://images.unsplash.com/photo-1724505179167-359fd018c2cc',
    'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4',
    'https://images.unsplash.com/photo-1725556605299-93c6a64acca7',
  ];
  return (
    <View style={styles.container}>
      <PostHeader
        title={item?.user_profile?.user_name}
        key={item?.id}
        profileImage={item?.user_profile?.profile_image}
      />
      <ImageSlider
        data={item?.post_image.map((img: any) => {
          return {img: img};
        })}
        autoPlay={false}
        closeIconColor="#fff"
        showIndicator={false}
        preview={false}
        caroselImageStyle={{resizeMode: 'cover'}}
      />
      <PostCardBottom
        likeCount={item?.likes}
        messageCount={item?.comments}
        shareCount={item?.shares}
        post_date={item?.timestamp}
        username={item?.user_profile?.user_name}
        description={item?.post_description}
      />
    </View>
  );
});

export default PostCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 10,
  },
});
