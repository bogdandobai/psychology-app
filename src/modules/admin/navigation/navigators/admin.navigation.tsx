import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {AdminGroupsNavigator} from "@src/modules/admin/navigation/navigators/admin-groups.navigation";
import {AdminIndividualNavigator} from "@src/modules/admin/navigation/navigators/admin-individual.navigation";
import {AdminUsersNavigator} from "@src/modules/admin/navigation/navigators/admin-users.navigation";
import {MyTabBar} from "@src/modules/admin/components/TabBar/TabBar";

const Tab = createMaterialTopTabNavigator();

export const AdminNavigator = () => {
  return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Groups" component={AdminGroupsNavigator} />
        <Tab.Screen name="Individual" component={AdminIndividualNavigator} />
        <Tab.Screen name="Users" component={AdminUsersNavigator} />
      </Tab.Navigator>
  );
}
