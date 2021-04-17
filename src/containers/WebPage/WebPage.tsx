import * as React from 'react';
import WebView from 'react-native-webview';
import { ActivityIndicator, SafeAreaView, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Colors } from '@src/themes';


export const WebPage = (props) => {
  const [loading, setLoading] = useState(true);

  const renderLoader = () => {
    if (!loading) {
      return;
    }
    return (
      <View style={styles.absoluteLoader}>
        <ActivityIndicator size={'large'} color={Colors.pink} />
      </View>
    );
  };

  const onLoadEnd = () => {
    setLoading(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      {renderLoader()}
      <WebView
        source={{ uri: props.route.params.url }}
        onLoadEnd={onLoadEnd}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  absoluteLoader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});
