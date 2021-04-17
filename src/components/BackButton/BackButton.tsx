import React from 'react';
import { Icon, TopNavigationAction } from '@ui-kitten/components';
import {ViewStyle} from "react-native";

interface Props {
  onPress: () => void;
  iconName?: string
  style?: ViewStyle
}

const iconName = () => {
  return 'arrow-ios-back-outline';
};

const BackIcon = (props) => (
  <Icon {...props} name={iconName()} animation={'zoom'} fill={'#FFFFFF'} />
);

const CustomIcon = (props) => (
  <Icon {...props} name={'menu'} animation={'zoom'} fill={'#FFFFFF'} />
);

export const BackButton = (props: Props) => {
  const onPress = () => {
    props.onPress();
  };

  return <TopNavigationAction style={props.style} icon={props.iconName?CustomIcon:BackIcon} onPress={onPress} />;
};
