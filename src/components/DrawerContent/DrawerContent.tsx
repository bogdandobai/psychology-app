import * as React from 'react'
import {View, StyleSheet, Linking} from "react-native";
import {Button, Icon} from '@ui-kitten/components'
import {Metrics} from "@src/themes";
import { HomeRoutes } from '@src/navigation/routes';
import auth from '@react-native-firebase/auth';

const HomeIcon = (params) => {
  return <Icon {...params} name={'calendar'}/>
}

const TermsIcon = (params) => {
  return <Icon {...params} name={'file-text'}/>
}

const PrivacyIcon = (params) => {
  return <Icon {...params} name={'lock'}/>
}

const ContactIcon = (params) => {
  return <Icon {...params} name={'email'}/>
}

const LogoutIcon = (params) => {
  return <Icon {...params} name={'log-out'}/>
}

export const DrawerContent = (props) => {
  const onHome = () => {
    props.navigation.navigate(HomeRoutes.MAIN_NAVIGATOR);
  }

  const onTerms = () => {
    props.navigation.navigate(HomeRoutes.TERMS, {url: 'https://bgyarmati.ro/'});
  }

  const onPrivacy = () => {
    props.navigation.navigate(HomeRoutes.PRIVACY, {url: 'https://bgyarmati.ro/'});
  }

  const onContact = async () => {
    await Linking.openURL('mailto:bgyarmati.psiholog@gmail.com');

  }

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <View style={styles.flex}>
      <View>
        <Button
          status={'danger'}
          style={styles.button}
          accessoryLeft={HomeIcon}
          size={'giant'}
          appearance={'ghost'}
          onPress={onHome}
        >
          Sedinte
        </Button>
        <Button
          status={'danger'}
          style={styles.button}
          accessoryLeft={TermsIcon}
          size={'giant'}
          appearance={'ghost'}
          onPress={onTerms}
        >
          Termeni si Conditii
        </Button>
        <Button
          status={'danger'}
          style={styles.button}
          accessoryLeft={PrivacyIcon}
          size={'giant'}
          appearance={'ghost'}
          onPress={onPrivacy}
        >
          Politica de confidentialitate
        </Button>
        <Button
          status={'danger'}
          style={styles.button}
          accessoryLeft={ContactIcon}
          size={'giant'}
          appearance={'ghost'}
          onPress={onContact}
        >
          Contact
        </Button>
      </View>
      <Button
        status={'danger'}
        style={styles.button}
        accessoryLeft={LogoutIcon}
        size={'giant'}
        appearance={'ghost'}
        onPress={onLogout}
      >
        Deconectare
      </Button>
    </View>
  )
}

const styles  = StyleSheet.create({
  flex:{
    flex:1,
    paddingVertical: Metrics.vertical._50,
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  button:{
    width:Metrics.screenWidth/1.4,
    alignSelf:'flex-start',
    justifyContent:'flex-start',
    paddingRight: Metrics.horizontal._30
  }
})
