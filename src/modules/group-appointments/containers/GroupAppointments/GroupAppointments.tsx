import * as React from 'react';
import {Layout} from "@ui-kitten/components";
import {GroupAppointmentsList} from "@src/modules/group-appointments/components";
import {GroupAppointment} from "@src/modules/group-appointments/types/classes";
import {StackScreenProps} from "@react-navigation/stack";
import {GroupAppointmentsProps, GroupAppointmentsRoutes} from "@src/modules/group-appointments/navigation/routes";
import {useEffect, useState} from "react";
import {getMeetings} from "@src/firestore/firestore";
import {NavigationService} from "@src/services/navigation.service";

export const GroupAppointments = (props: StackScreenProps<GroupAppointmentsProps, GroupAppointmentsRoutes.GROUP_APPOINTMENTS>) => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    getMeetings().then((newMeetings)=>{
      setMeetings(newMeetings)
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    })
  },[])

  const onPress = (item: GroupAppointment) => {
  NavigationService.navigateTo('GroupAppointmentDetails', {appointment: item, item})
  }

  return (
    <Layout style={{flex:1, backgroundColor: '#fdfaef'}}>
      <GroupAppointmentsList
        onPress={onPress}
        data={meetings}
        loading={loading}
      />
    </Layout>
  )
}
