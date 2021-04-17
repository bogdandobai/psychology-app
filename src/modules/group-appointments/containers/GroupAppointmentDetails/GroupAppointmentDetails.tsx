import * as React from 'react';
import { ScrollView, View} from 'react-native'
import { Layout, Text } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { GroupAppointmentsProps, GroupAppointmentsRoutes } from "@src/modules/group-appointments/navigation/routes";
import {Metrics} from "@src/themes";
import FastImage from "react-native-fast-image";
import {Note} from "@src/modules/group-appointments/components";
import styles from './GroupAppointmentDetailsStyle';
import {NoteClass} from "@src/modules/group-appointments/types/classes";
import {useEffect, useRef, useState} from "react";
import {ModalBox} from "@src/components";
import { SharedElement } from 'react-navigation-shared-element';
import {getNotes} from "@src/firestore/firestore";


export const GroupAppointmentDetails = (props: StackScreenProps<GroupAppointmentsProps,GroupAppointmentsRoutes.GROUP_APPOINTMENT_DETAILS>) => {
  const modalRef = useRef(null)
  const {appointment} = props.route.params
  const [notes, setNotes] = useState<NoteClass[]>(null);
  const [currentNote, setCurrentNote] = useState<NoteClass>(null);
  const { item } = props.route.params;

  useEffect(()=>{
    getNotes(item.id).then((notes)=>{
      setNotes(notes)
    })
  },[])

  const onPressNote = (note: NoteClass) => {
    setCurrentNote(note);
    modalRef.current.showModal();
  }

  const renderNotes = () => {
    if(!notes){
      return;
    }
    return notes.map((note) => {
      return(
        <Note key={note.id} note={note} onPress={onPressNote}/>
      )
    })
  };

  const renderModal = () => {
    return(
      <ModalBox ref={modalRef} hideFooter={true} title={currentNote?.title}>
        <Text category={'s1'}>{currentNote?.description}</Text>
      </ModalBox>
    )
  }

  return (
    <Layout style={{flex:1, backgroundColor: '#fdfaef', paddingHorizontal: Metrics.horizontal._24}}>
      <ScrollView
        bounces={false}
        contentContainerStyle={{ alignItems:'center'}}
      >
        <SharedElement id={`item.${item.id}.photo`}>
        <FastImage
          resizeMode={'contain'}
          source={{uri: appointment.image}}
          style={{...styles.image, backgroundColor: appointment.backgroundColor}}
        />
        </SharedElement>
        <Text category={"s1"}>{appointment.description}</Text>
        <View style={styles.notesWrapper}>
          {renderNotes()}
        </View>
        {renderModal()}
      </ScrollView>
    </Layout>
  )
}
