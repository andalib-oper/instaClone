import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Inputs/Input';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Styles} from '../../styles/globalStyles';
import AttachmentPicker from '../../components/AttachmentPicker/AttachmentPicker';
import CustomButton from '../../components/ui/CustomButton';

const CreatePost = ({navigation}: {navigation: any}) => {
  const [imageLoading, setImageLoading] = useState(false);
  let postSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    photos: Yup.array()
      .of(Yup.string().required('Photos is required'))
      .min(1, 'At least one photo is required'),
  });
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    setFieldTouched,
    touched,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      photos: [],
    },
    validationSchema: postSchema,
    onSubmit: async (values: any) => {
      ToastAndroid.show('Post added successfully', ToastAndroid.SHORT);
      navigation.goBack();
    },
  });

  const uploadAttachments = (e: any) => {
    setValues({...values, photos: [...values?.photos, ...e]});
  };
  const onDeleteImage = (e: any) => {
    let removeImages = values.photos.filter((image: any) => image !== e);
    setValues({...values, photos: removeImages});
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={60} behavior="padding">
          <ScrollView contentContainerStyle={{paddingBottom: 120}}>
            <Input
              label={'Title'}
              onChangeText={handleChange('title')}
              value={values?.title}
              fullLength={true}
              keyboardType="default"
              placeholder="Title"
            />
            {touched?.title && errors?.title && (
              <Text style={Styles.error}>{String(errors.title)}</Text>
            )}
            <Input
              label={'Description'}
              onChangeText={handleChange('description')}
              value={values?.description}
              fullLength={true}
              keyboardType="default"
              placeholder="Description"
              multiline={true}
              numberOfLines={4}
              longText={true}
              textAlignVertical="top"
            />
            {touched?.description && errors?.description && (
              <Text style={Styles.error}>{String(errors.description)}</Text>
            )}
            <Text style={Styles.fieldLabel}>Add Photos</Text>
            <AttachmentPicker
              img={values.photos}
              setImg={uploadAttachments}
              deleteImage={(e: any) => onDeleteImage(e)}
              loader={imageLoading}
              show={false}
              profile={true}
            />
            {touched?.photos && errors?.photos && (
              <Text style={Styles.error}>{String(errors?.photos)}</Text>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      <View style={Styles.bottomBtn}>
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
});
