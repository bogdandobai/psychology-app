import * as React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import {LoginScreen} from "@auth/containers";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
