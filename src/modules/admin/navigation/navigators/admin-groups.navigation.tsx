import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {
  AdminGroupsScreen,
  AdminAddGroupMeeting,
  AdminAddGroup,
  AdminGroupMeetings
} from "@src/modules/admin/containers";
import {GroupAppointmentDetails} from "@src/modules/group-appointments/containers";
import {usePopToTop} from "@src/navigation/hooks/usePopToTop";

const Stack = createStackNavigator();

export const AdminGroupsNavigator = ({navigation}) => {
  usePopToTop(navigation)

  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name={'Groups'}
        component={AdminGroupsScreen}
      />
      <Stack.Screen
        name={'GroupMeetings'}
        component={AdminGroupMeetings}
      />
      <Stack.Screen
        name={'AddGroup'}
        component={AdminAddGroup}
      />
      <Stack.Screen
        name={'AddGroupMeeting'}
        component={AdminAddGroupMeeting}
      />
      <Stack.Screen
        name={'AdminMeeting'}
        component={GroupAppointmentDetails}
      />
    </Stack.Navigator>
  );
}
