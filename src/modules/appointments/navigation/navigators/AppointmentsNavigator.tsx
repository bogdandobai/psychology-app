import * as React from 'react';
import {createStackNavigator, HeaderStyleInterpolators} from "@react-navigation/stack";
import {
  GroupAppointmentsProps,
  GroupAppointmentsRoutes
} from "@src/modules/group-appointments/navigation/routes";
import {Appointments} from "@src/modules/appointments/containers";
import styles from '@src/navigation/styles/header-styles';
import {HeaderTitle} from "@src/components";
import 'moment/locale/ro'


const Stack = createStackNavigator<GroupAppointmentsProps>();

export const AppointmentsNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: styles.header,
      headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
      headerLeftContainerStyle:{justifyContent:'flex-start'},
      headerTitleContainerStyle:{alignSelf:'flex-start'}
    }}
    >
      <Stack.Screen
        name={GroupAppointmentsRoutes.GROUP_APPOINTMENTS}
        component={Appointments}
        options={{
          headerTitle: () => <HeaderTitle title={'Sedinte Individuale'} description={'4 sedinte ramase'}/>
        }}
      />
    </Stack.Navigator>
  );
}
