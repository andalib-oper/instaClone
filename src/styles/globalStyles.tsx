import { Dimensions, StyleSheet } from "react-native"
import { code_400, code_600, code_700, white } from "./colors"

export const fontFamilyRegular = 'Inter-Regular'
export const fontFamilySemiBold = 'Inter-SemiBold'
export const fontFamilyMedium = "Inter-Medium"
export const fontFamilyBold = "Inter-Bold"

export const {fontScale, width, height} = Dimensions.get('window')

export const Styles = StyleSheet.create({
  bottomBtn:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor:'#fff',
    elevation:5
  },
  btn: {
    width: width/1.14,
    paddingVertical: 14,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: white,
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: fontFamilyMedium,
  },
  fieldLabel: {
    fontFamily: fontFamilyMedium,
    fontSize: 13/fontScale,
    color: code_600,
    marginBottom: 8,
    marginTop: 16,
  },
  twoFieldsContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  error: {
      color: 'red',
      fontSize: 12 / fontScale,
      fontFamily: fontFamilyRegular,
      marginTop: 4,
      paddingHorizontal: 4,
      textAlign:'left'
    },
});