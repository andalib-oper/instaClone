import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PostCard from '../../components/PostCard/PostCard'
import mockdata from '../../assets/mockdata/postdata.json'

const Home = () => {
  const {fontScale} = useWindowDimensions()
  const styles = makeStyles(fontScale)
  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={mockdata}
          renderItem={({item, index}) => <PostCard item={item} key={index} />}
          keyExtractor={(item, indx) => indx.toString()}
          getItemLayout={(data, index) => ({
            length: 500, // Assuming ITEM_HEIGHT is a constant value or calculated elsewhere
            offset: 500 * index,
            index,
          })}
          initialNumToRender={10}
          removeClippedSubviews={true}
        />
      </View>
    </View>
  );
}

export default Home

const makeStyles = (fontScale: any) => StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  flatlist:{
    flex:1
  }
})