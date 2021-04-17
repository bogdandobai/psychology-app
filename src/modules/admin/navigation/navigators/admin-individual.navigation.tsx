import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {AdminIndividualsScreen} from "@src/modules/admin/containers/AdminIndividuals/AdminIndividuals";
import {usePopToTop} from "@src/navigation/hooks/usePopToTop";

const Stack = createStackNavigator();

export const AdminIndividualNavigator = ({navigation}) => {
  usePopToTop(navigation)
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name={'Meetings'}
        component={AdminIndividualsScreen}
      />
    </Stack.Navigator>
  );
}
