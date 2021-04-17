import * as React from 'react'
import {View, StyleSheet, FlatList, Pressable} from 'react-native'
import {useState, useCallback} from "react";
import {getUsers} from "@src/firestore/firestore";
import { Metrics, theme} from "@src/themes";
import {Icon, Spinner, Text} from '@ui-kitten/components';
import {FloatingButton} from "@src/components";
import {NavigationService} from "@src/services/navigation.service";
import { useFocusEffect } from '@react-navigation/native';
export const AdminUsersScreen = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)


  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getUsers().then((data)=>{
        setUsers(data)
        setLoading(false)
      }).catch(()=>{
        setLoading(false)
      })
    }, []),
  )


  const onAddClient = () => {
    NavigationService.navigateTo('AddClient')
  }


  const renderItem = ({item}) => {
    const name = item.type.toLowerCase() === 'admin' ? 'star' : item.type.toLowerCase() ==='grup' ? 'people' : 'person'
    return (
      <Pressable style={styles.itemContainer}>
        <Text category={"s2"}>{item.email}</Text>
        <Icon
          name={name}
          style={styles.icon}
          fill={theme['color-success-500']}
        />
      </Pressable>
    )
  }

  const keyExtractor = (item) => item.id

  const renderFooter = () => {
    if(loading){
      return <Spinner size={'small'} />;
    }
    return <View/>
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={users}
        contentContainerStyle={{paddingBottom: Metrics.horizontal._80}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={{alignItems:'center'}}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton title={'Adauga Client'} onPress={onAddClient}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fdfaef',
    paddingTop:20
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  icon:{
    width:20,
    height:20
  }
})
