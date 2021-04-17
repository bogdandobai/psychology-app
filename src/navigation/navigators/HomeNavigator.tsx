import React from 'react';
import {HomeRoutes, HomeRoutesProps} from "@src/navigation/routes";
import {MainNavigator} from "@src/navigation/navigators/MainNavigator";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Metrics} from "@src/themes";
import {BackButton, DrawerContent} from "@src/components";
import {WebPage} from "@src/containers";
import {useNotifications} from "@src/modules/firebase/hooks/messaging.hook";

const Drawer = createDrawerNavigator<HomeRoutesProps>();

export const HomeNavigator = (props) => {

  useNotifications(
    () => null,
    () => null,
    () => null,
    () => null,
    () => null,
  );

  return <Drawer.Navigator
    drawerStyle={{width: Metrics.screenWidth / 1.4, height: Metrics.screenHeight}}
    drawerPosition={"right"}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name={HomeRoutes.MAIN_NAVIGATOR} component={MainNavigator}/>
    <Drawer.Screen
      name={HomeRoutes.TERMS}
      component={WebPage}
      options={({navigation}) => ({
        headerShown: true,
        headerStyle: {backgroundColor: 'rgb(243,203,143)'},
        headerTitle: 'Termeni si Conditii',
        headerLeft: () => <BackButton onPress={navigation.goBack}/>
      })}
    />
    <Drawer.Screen
      name={HomeRoutes.PRIVACY}
      component={WebPage}
      options={({navigation}) => ({
        headerShown: true,
        headerStyle: {backgroundColor: 'rgb(243,203,143)'},
        headerTitle: 'Politica de confidentialitate',
        headerLeft: () => <BackButton onPress={navigation.goBack}/>
      })}
    />
  </Drawer.Navigator>;
};
