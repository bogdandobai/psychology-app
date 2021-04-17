import * as React from 'react'
import {View, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import Animated from "react-native-reanimated";
import {Metrics, Images} from "@src/themes";
import {BackButton} from "@src/components";
import {NavigationService} from "@src/services/navigation.service";

export const MyTabBar = ({ state, descriptors, navigation, position }) => {

  const renderBackButton = () =>{
    return <BackButton style={{position:'absolute', top:40, left:10}}  onPress={() => NavigationService.pop()}/>
  }

  return (
    <View style={{
      backgroundColor: 'rgb(243,203,143)',
      height: Metrics.screenHeight * 0.22,
      borderBottomLeftRadius: Metrics.horizontal._32,
      borderBottomRightRadius: Metrics.horizontal._32,
      justifyContent:'flex-end',
      alignItems:'center'
    }}>
      <SafeAreaView/>
      <BackButton style={{position:'absolute', top:40, right:10}} iconName={'menu'} onPress={() => NavigationService.openDrawer()}/>
      {renderBackButton()}
      <Image style={{width:130,height:130}} source={Images.ic_logo}/>
      <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingBottom:10 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.2)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems:'center' }}
            >
              <Animated.Text style={{ opacity, fontSize: 20,
                fontWeight: '600',
                color: 'black'
              }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
