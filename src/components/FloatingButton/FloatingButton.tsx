import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {Button, Spinner, Text} from '@ui-kitten/components'
import {Colors} from "@src/themes";

interface Props {
  title:string,
  onPress: () => void
  loading?: boolean
}


export const FloatingButton = (props: Props) => {

  const LoadingIndicator = () => {
    if (!props.loading) {
      return <View/>
    }
    return (<View style={{width: '100%', height: '100%', alignItems: 'center'}}>
      <Spinner size='small' status={'danger'}/>
    </View>)
  };

  return(
    <Button disabled={props.loading} style={styles.container} size={'giant'} onPress={props.onPress} accessoryLeft={LoadingIndicator}>
      {evaProps => (
        !props.loading && (<Text {...evaProps} category={'h6'}>{props.title}</Text>)
      )}
    </Button>
  )
}

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    bottom: 50,
    width:'92%',
    alignSelf:'center',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Colors.pink,
  }
})
