import * as React from 'react';
import {StyleSheet} from "react-native";
import {Layout} from "@ui-kitten/components";
import {useState} from "react";
import {FloatingButton, PrimaryInput} from "@src/components";
import {createGroupMeeting} from "@src/firestore/firestore";
import {Metrics} from "@src/themes";
import {DateTimePicker} from "@src/modules/admin/components";
import FastImage from "react-native-fast-image";
import ImagePicker from 'react-native-image-crop-picker'

export const AdminAddGroupMeeting = (props) => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState('');


  //TODO: Add Data, create everything u need, maybe image picker ? https://firebase.google.com/docs/storage/web/upload-files

  const onAdd = () => {
    createGroupMeeting(title, description)
  }

  const onChangeImage = () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      setSelectedImage(image.path)
    })
  }

  return (
    <Layout style={styles.container}>
      <PrimaryInput value={title} onChangeText={setTitle} placeHolder={'Titlu'}/>
      <PrimaryInput value={description} onChangeText={setDescription} placeHolder={'Descriere'}/>
      <DateTimePicker onConfirm={() => null}/>
      <FastImage
        style={{width:200, height:200, backgroundColor:'rgb(243,203,143)'}}
        source={{uri: selectedImage}}
        onTouchEnd={onChangeImage}
      />
      <FloatingButton loading={loading} onPress={onAdd} title={'Adauga Sedinta'}/>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fdfaef',
    flex:1,
    paddingHorizontal: Metrics.horizontal._24,
    paddingTop: 20
  }
})
