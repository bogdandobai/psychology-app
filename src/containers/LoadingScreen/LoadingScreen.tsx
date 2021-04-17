import React from 'react';
import { View } from 'react-native';
import { Spinner } from '@ui-kitten/components';

export const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner size={'giant'} />
    </View>
  );
};
