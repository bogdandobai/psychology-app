import * as React from 'react';
import {CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators} from "@react-navigation/stack";
import {
  GroupAppointmentsProps,
  GroupAppointmentsRoutes
} from "@src/modules/group-appointments/navigation/routes";
import {GroupAppointmentDetails, GroupAppointments} from "@src/modules/group-appointments/containers";
import styles from '@src/navigation/styles/header-styles';
import {BackButton, HeaderTitle} from "@src/components";
import moment from "moment";
import 'moment/locale/ro'
import {NavigationService} from "@src/services/navigation.service";

const Stack = createStackNavigator<GroupAppointmentsProps>();

export const GroupAppointmentsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerLeftContainerStyle:{justifyContent:'flex-start'},
        headerRightContainerStyle:{justifyContent:'flex-start'},
        headerTitleContainerStyle:{alignSelf:'flex-start'},
        headerTitleAlign:'center'
      }}
    >
      <Stack.Screen
        name={GroupAppointmentsRoutes.GROUP_APPOINTMENTS}
        component={GroupAppointments}
        options={({navigation})=>({
          headerRight:() => <BackButton iconName={'menu'} onPress={() => NavigationService.openDrawer()}/>,
          headerTitle: () => <HeaderTitle title={'TEENS CONNECET'} description={'Hai să ne conectăm!'}/>
        })}
      />
      <Stack.Screen
        name={GroupAppointmentsRoutes.GROUP_APPOINTMENT_DETAILS}
        component={GroupAppointmentDetails}
        options={({route, navigation})=>({
          headerLeft:() => <BackButton onPress={() => navigation.goBack()}/>,
          headerTitle: () => <HeaderTitle title={route.params.appointment.title} description={moment(route.params.appointment.date).locale('ro').format('LLL')}/>,
        })}
      />
    </Stack.Navigator>
  );
}
