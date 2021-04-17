import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {AddClient, AdminUsersScreen} from "@src/modules/admin/containers";
import {usePopToTop} from "@src/navigation/hooks/usePopToTop";

const Stack = createStackNavigator();

export const AdminUsersNavigator = ({navigation}) => {
  usePopToTop(navigation)
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name={'Users'}
        component={AdminUsersScreen}
      />
      <Stack.Screen
        name={'AddClient'}
        component={AddClient}
      />
    </Stack.Navigator>
  );
}
