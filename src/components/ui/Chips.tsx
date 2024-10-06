import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { white, yellow } from '../../styles/colors'
import { fontFamilyMedium } from '../../styles/globalStyles'

const Chips = ({title}:{title:any}) => {
    const {fontScale} = useWindowDimensions()
    const styles = makeStyles(fontScale)
  return (
    <View style={[styles.chip,{backgroundColor: title==="Ongoing"? yellow: title==="Completed"?'green':"red"}]}>
      <Text style={styles.label}>{title}</Text>
    </View>
  )
}

export default Chips

const makeStyles = (fontScale:any) => StyleSheet.create({
    chip: {
      padding: 6,
      borderRadius: 5,
      backgroundColor: yellow,
    },
    label: {
      fontSize: 13/fontScale,
      color: white,
      fontFamily: fontFamilyMedium,
      textAlign:'center'
    },
})