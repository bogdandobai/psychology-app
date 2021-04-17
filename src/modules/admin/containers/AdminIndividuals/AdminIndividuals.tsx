import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const AdminIndividualsScreen = () => {
  return(
    <View style={styles.container}>
      <Text>ADMIN INDIVIDUALS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fdfaef'
  }
})
