import * as React from 'react'
import {StyleSheet, ScrollView, Keyboard} from 'react-native'
import {FloatingButton, PrimaryInput} from "@src/components";
import {useEffect, useRef, useState} from "react";
import {Select, SelectItem, IndexPath, Text, Input} from "@ui-kitten/components";
import {createUser, getGroups} from "@src/firestore/firestore";
import {Metrics} from "@src/themes";
import auth from '@react-native-firebase/auth';

export const AddClient = () => {
  const [groups, setGroups] = useState([])
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cnp, setCNP] = useState('');
  const [loading, setLoading] = useState(false);
  const [typeIndex, setTypeIndex] = useState(new IndexPath(0));
  const [groupIndex, setGroupIndex] = useState(new IndexPath(0));

  const nameRef = useRef(null);
  const cnpRef = useRef(null);

  const typesData = [
    'Admin', 'Grup', 'Individual'
  ]

  useEffect(()=>{
    getGroups().then((data)=>{
      setGroups(data)
    })
  },[])

  const renderGroupOptions = () => {
    return groups.map((group) => {
      return <SelectItem title={group.name}/>
    })
  }

  const renderGroupSelect = () => {
    if(typeDisplayValue!=='Grup'){
      return;
    }
    return (
      <Select
        style={styles.padding}
        label={() => <Text style={styles.padding} category={"s1"}>{'Grup'}</Text>}
        value={groupDisplayValue}
        selectedIndex={groupIndex}
        onSelect={index => setGroupIndex(index)}>
        {renderGroupOptions()}
      </Select>
    )
  }

  const renderOption = (title) => (
    <SelectItem title={title}/>
  );

  const typeDisplayValue = typesData[typeIndex.row];
  const groupDisplayValue = groups[groupIndex.row]?.name || 'Teens Connect';

  const onSave = () => {
    setLoading(true)
    auth().createUserWithEmailAndPassword(email, 'qwer123').then((credentials)=>{
      createUser(credentials.user._user.id, email, name, cnp, typeDisplayValue, groups[groupIndex.row].id).then(()=>{
        setLoading(false)
      }).catch(()=>{
        setLoading(false)
      })
    })
  }

  return(
    <>
      <ScrollView bounces={false} style={styles.container}>
        <PrimaryInput
          value={email}
          onChangeText={setEmail}
          placeHolder={'Email'}
          onSubmitEditing={() => nameRef.current.focus()}
        />
        <PrimaryInput
          value={name}
          onChangeText={setName}
          placeHolder={'Nume'}
          ref={nameRef}
          onSubmitEditing={() => cnpRef.current.focus()}
        />
        <PrimaryInput
          value={cnp}
          onChangeText={setCNP}
          placeHolder={'CNP'}
          ref={cnpRef}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <Select
          style={{        paddingVertical: Metrics.vertical._8,
          }}
          label={() => <Text style={{paddingBottom:Metrics.vertical._10
          }} category={"s1"}>{'Tip'}</Text>}
          value={typeDisplayValue}
          selectedIndex={typeIndex}
          onSelect={index => setTypeIndex(index)}>
          {typesData.map(renderOption)}
        </Select>
        {renderGroupSelect()}
      </ScrollView>
      <FloatingButton loading={loading} title={'Salveaza'} onPress={onSave}/>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Metrics.vertical._24,
    paddingHorizontal: Metrics.horizontal._24
  },
  padding: {
    paddingVertical: Metrics.vertical._8
  }
})
