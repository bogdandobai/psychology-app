import * as React from 'react';
import {Layout} from "@ui-kitten/components";
import {GroupAppointmentsList} from "@src/modules/group-appointments/components";
import {GroupAppointment} from "@src/modules/group-appointments/types/classes";
import {useEffect, useState} from "react";
import {deleteGroupMeeting, getGroupMeetingsByGroupId} from "@src/firestore/firestore";
import {NavigationService} from "@src/services/navigation.service";
import {FloatingButton} from "@src/components";

export const AdminGroupMeetings = (props) => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    getGroupMeetingsByGroupId(props.route.params.id).then((newMeetings)=>{
      setMeetings(newMeetings)
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    })
  },[])

  const onPress = (item: GroupAppointment) => {
    NavigationService.navigateTo('AdminMeeting', {appointment: item, item})
  }

  const onDelete = (id: string) => {
    deleteGroupMeeting(id).then(()=>{
      setMeetings(meetings.filter((meeting)=>meeting.id!==id))
    })
  }

  const onNavigateToAddMeeting = () => {
    NavigationService.navigateTo('AddGroupMeeting')
  }

  return (
    <Layout style={{ backgroundColor: '#fdfaef', flex:1, paddingBottom:100}}>
      <GroupAppointmentsList
        admin={true}
        onPress={onPress}
        data={meetings}
        loading={loading}
        onDelete={onDelete}
      />
      <FloatingButton onPress={onNavigateToAddMeeting} title={'Adauga Sedinta'}/>
    </Layout>
  )
}
