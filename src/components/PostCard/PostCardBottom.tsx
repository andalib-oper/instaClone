import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  fontFamilyBold,
  fontFamilyMedium,
  fontFamilyRegular,
  fontScale,
} from '../../styles/globalStyles';
import {black} from '../../styles/colors';
import moment from 'moment';

const PostCardBottom = ({
  likeCount,
  messageCount,
  shareCount,
  post_date,
  username,
  description,
}: {
  likeCount: number;
  messageCount: number;
  shareCount: number;
  post_date: string;
  username: string;
  description: string;
}) => {
  const [like, setLike] = useState(false);
  const [more, setMore] = useState(false);
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`;
  return (
    <View style={styles.topcontainer}>
      <View style={styles.container}>
        <AntDesign
          name={like ? 'heart' : 'hearto'}
          size={24}
          color={like ? 'red' : 'black'}
          onPress={() => setLike(!like)}
        />
        <Text style={styles.like_txt}>{likeCount}</Text>
        <AntDesign name="message1" size={24} color="black" />
        <Text style={styles.like_txt}>{messageCount}</Text>
        <AntDesign name="sharealt" size={24} color="black" />
        <Text style={styles.like_txt}>{shareCount}</Text>
      </View>
      <Text style={styles.username_txt}>
        {username}{' '}
        {more ? (
          <Text
            style={{fontFamily: fontFamilyMedium}}
            onPress={() => setMore(false)}>
            {description}
          </Text>
        ) : (
          <Text style={{fontFamily: fontFamilyMedium}}>
            {description.substring(0, 40)}
            <Text onPress={() => setMore(true)}>.....more</Text>
          </Text>
        )}
      </Text>
      <Text style={styles.date_txt}>
        {moment(new Date(post_date)).fromNow()}
      </Text>
    </View>
  );
};

export default PostCardBottom;

const styles = StyleSheet.create({
  topcontainer: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'flex-start',
    paddingHorizontal: 22,
    paddingVertical: 16,
  },
  like_txt: {
    fontFamily: fontFamilyBold,
    color: black,
    fontSize: 14 / fontScale,
    alignSelf: 'center',
  },
  username_txt: {
    fontFamily: fontFamilyBold,
    color: black,
    fontSize: 14 / fontScale,
    paddingHorizontal: 22,
    lineHeight: 16 * 1.4,
  },
  date_txt: {
    fontFamily: fontFamilyMedium,
    color: '#000',
    fontSize: 12 / fontScale,
    paddingHorizontal: 22,
    marginTop: 8,
  },
});
