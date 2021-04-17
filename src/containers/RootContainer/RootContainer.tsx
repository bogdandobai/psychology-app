import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {NavigationService} from "@src/services/navigation.service";
import {AppNavigator} from "@src/navigation/navigators/AppNavigator";
import * as fromStore from '@src/store'
import {Colors} from "@src/themes";
import moment from "moment";


const Theme = {
  dark: false,
  colors: {
    primary:'#fdfaef',
    card:'#fdfaef',
    background: '#fdfaef',
    text:'#fdfaef',
    border:'#fdfaef',
    notification:'#fdfaef'
  }
};

export const RootContainer = () => {
  useEffect(() => {
    moment.locale('ro');
    fromStore.coreActions.launchApp();
  },[])


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'rgb(243,203,143)'}/>
      <NavigationContainer
        theme={Theme}
        ref={(navigatorRef: any) => NavigationService.initialize(navigatorRef)}
      >
        <AppNavigator/>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent:'center'
  },
})
