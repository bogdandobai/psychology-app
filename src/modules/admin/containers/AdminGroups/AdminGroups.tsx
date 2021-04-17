import * as React from 'react'
import {View, StyleSheet, FlatList, Pressable, Alert} from 'react-native'
import {useEffect, useState} from "react";
import {deleteGroup, getGroups} from "@src/firestore/firestore";
import {Metrics} from "@src/themes";
import {GroupClass} from "@src/modules/admin/types/classes";
import {Button, Icon, Text} from '@ui-kitten/components'
import {NavigationService} from "@src/services/navigation.service";
import {FloatingButton} from "@src/components";

const DeleteIcon = (params) => {
  return <Icon {...params} name={'trash'}/>
}

export const AdminGroupsScreen = () => {
  const [groups, setGroups] = useState([]);
  useEffect(()=>{
    getGroups().then((data)=>{
      setGroups(data)
    })
  },[])

  const keyExtractor = (item: GroupClass) => item.id;

  const onPress = (item: GroupClass) => {
    NavigationService.navigateTo('GroupMeetings', {id: item.id})
  }

  const onDeleteConfirmed = (id: string) => {
    deleteGroup(id).then(()=>{
      setGroups(groups.filter((group)=>group.id!==id));
    })
  }

  const onDelete = (id: string) => {
    Alert.alert('Atentie!', 'Sigur doresti sa stergi aceasta intalnire ?', [
      {
        text: 'Nu',
        style: 'cancel',
      },
      {
        text: 'Da',
        onPress: () => onDeleteConfirmed(id),
      },
    ]);
  }

  const renderDelete = (id: string) => {
    return (
      <Button
        style={styles.button}
        accessoryLeft={DeleteIcon}
        appearance={'ghost'}
        onPress={() => onDelete(id)}
      />
    )
  }

  const renderItem = ({item, index}) => {
    return(
      <Pressable onPress={() => onPress(item)} style={{...styles.itemContainer,marginTop: index%2!==0 ? Metrics.vertical._80 : Metrics.vertical._40}}>
        {renderDelete(item.id)}
        <Text style={{paddingVertical:20}} category={"h6"}>{item.name}</Text>
        <Text numberOfLines={5} category={"s2"} style={{flex:1}}>{item.description}</Text>
      </Pressable>
    )
  }

  const onNavigateToAddGroup = () => {
    return NavigationService.navigateTo('AddGroup')
  }

  return(
    <View style={styles.container}>
      <FlatList
        style={{paddingTop:10}}
        data={groups}
        numColumns={2}
        contentContainerStyle={{paddingBottom: Metrics.horizontal._80}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
      <FloatingButton onPress={onNavigateToAddGroup} title={'Adauga Grup'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fdfaef',
    paddingBottom:100
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.horizontal._16,
  },
  itemContainer:{
    backgroundColor: 'rgb(253,241,206)',
    paddingHorizontal:10,
    justifyContent:'flex-start',
    alignItems:'center',
    width: Metrics.horizontal._160,
    height: Metrics.horizontal._160,
    borderRadius: Metrics.horizontal._8,
    borderColor: '#DEDEDE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
  position:'absolute',
    top:-15,
    right:-15,
    zIndex:15,
    width:15,
    height:15,
    backgroundColor:'white',
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
}
})
