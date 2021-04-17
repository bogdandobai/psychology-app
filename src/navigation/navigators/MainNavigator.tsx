import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {GroupAppointmentsNavigator} from "@src/modules/group-appointments/navigation/navigators";
import {AppointmentsNavigator} from "@src/modules/appointments/navigation/navigators";
import {AdminNavigator} from "@src/modules/admin/navigation/navigators";
import {BackButton} from "@src/components";
import {NavigationService} from "@src/services/navigation.service";
import {useEffect, useState} from "react";
import auth from "@react-native-firebase/auth";
import { getUser } from '@src/firestore/firestore';
import {User} from "@auth/types/classes";
import {AppRoutes} from "@src/navigation/routes";
import {LoadingScreen} from "@src/containers";

const Stack = createStackNavigator();

export const MainNavigator = () => {
  const [user, setUser] = useState(new User())
  const [initializing, setInitializing] = useState(false)

  // function onAuthStateChanged(user) {
  //   if(!user){
  //     return;
  //   }
  //   getUser(user._user.uid).then((data: User)=>{
  //     setUser(data);
  //     setTimeout(() => {setInitializing(false)},200)
  //   })
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);
  useEffect(()=>{
    setUser({
      id:'1',
      email:'abc@abc.om',
      type:'admin'
      }
    )
  },[])


  return (
    <Stack.Navigator headerMode={'none'}>
      {
        initializing ? (
            <Stack.Screen name={AppRoutes.LOADING} component={LoadingScreen}/>
          ) :
          user.type === 'admin' ? (
            (<Stack.Screen name={'Admin'} component={AdminNavigator} options={{
              headerRight:() => <BackButton iconName={'menu'} onPress={() => NavigationService.openDrawer()}/>,
            }}/> )
          ) : user.type === 'group' ?
            (<Stack.Screen name={'Group'} component={GroupAppointmentsNavigator}/>)
            :
            (<Stack.Screen name={'Individual'} component={AppointmentsNavigator}/>)
      }
    </Stack.Navigator>
  );
}
