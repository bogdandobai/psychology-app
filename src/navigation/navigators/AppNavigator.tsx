import * as React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {AppRoutes, AppRoutesProps} from "@src/navigation/routes/app.routes";
import {LoadingScreen} from "@src/containers";
import {HomeNavigator} from "@src/navigation/navigators/HomeNavigator";
import {AuthNavigator} from "@auth/navigation/navigators/AuthNavigator";
import {useEffect, useState} from "react";
import RNBootsplash from 'react-native-bootsplash'
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator<AppRoutesProps>();

export const AppNavigator = () => {
    // const loading = useSelector(fromStore.selectVerifyingAuth);
    // const user = false;
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    useEffect(()=>{
        RNBootsplash.hide();
    },[])


    return (
        <Stack.Navigator
            screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,}}
        >
            {initializing ? (
                <Stack.Screen name={AppRoutes.LOADING} component={LoadingScreen}/>
            ) : !user ?  (
                <Stack.Screen
                    name={AppRoutes.AUTH}
                    component={AuthNavigator}
                    options={{ headerShown: false }}
                />
            ) : (
              <Stack.Screen
                name={AppRoutes.HOME}
                component={HomeNavigator}
                options={{ headerShown: false }}
              />
            )}
        </Stack.Navigator>
    );
};
