import * as React from 'react'
import {View, StyleSheet} from 'react-native'
import {FloatingButton, PrimaryInput} from "@src/components";
import {useRef, useState} from "react";
import {Metrics} from "@src/themes";
import {addGroup} from "@src/firestore/firestore";

export const AdminAddGroup = () => {
  const [groupName, setGroupName] = useState('')
  const [groupDescription, setGroupDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const descriptionRef = useRef(null)

  const onAdd = () => {
    setLoading(true);
    addGroup(groupName, groupDescription).then(()=>{
      setLoading(false)
    }).catch(()=>{
      setLoading(false)
    })
  }


  return(
    <View style={styles.container}>
      <PrimaryInput
        value={groupName}
        onChangeText={setGroupName}
        placeHolder={'Numele grupului'}
        onSubmitEditing={() => descriptionRef.current.focus()}
      />
      <PrimaryInput
        ref={descriptionRef}
        value={groupDescription}
        onChangeText={setGroupDescription}
        placeHolder={'Descrierea rupului'}
        onSubmitEditing={onAdd}
      />
      <FloatingButton loading={loading} title={'Salveaza'} onPress={onAdd}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    backgroundColor: '#fdfaef',
    paddingHorizontal: Metrics.horizontal._24,

  },
})
