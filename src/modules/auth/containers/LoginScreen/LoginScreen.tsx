import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LoginForm } from '@auth/components';
import * as fromStore from '@src/store';
import {Button, Layout, Text} from '@ui-kitten/components';
import {Keyboard, SafeAreaView, ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import {useEffect, useState} from "react";
import FastImage from "react-native-fast-image";
import {Images} from "@src/themes/images";
import auth from "@react-native-firebase/auth";

import styles from './LoginScreenStyle'

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState(false);

  useEffect(()=>{
  },[])

  const onLogin = () => {
    setLogin(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user)=>{
        setLogin(false)
        console.log('user',user);
      })
      .catch(error => {
        setLogin(false);
      })
  }


  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <ScrollView bounces={false} style={styles.flex}>
        <SafeAreaView/>
        <FastImage
          style={{height:220, width:220, alignSelf:'center'}}
          source={Images.ic_logo}
        />
        <Text style={{alignSelf:'center'}} category={"h3"}>Bine ati venit!</Text>
        <View style={styles.padding}>
          <LoginForm onSetEmail={setEmail} onSetPassword={setPassword} />
        </View>
        <Layout style={styles.padding}>
          <Button size={'giant'} onPress={onLogin}>Autentificare</Button>
          <Text style={{alignSelf:'center', paddingTop:20}}>Nu ai cont? Inregistreaza-te aici!</Text>
        </Layout>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
