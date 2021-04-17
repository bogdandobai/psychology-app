import * as React from 'react';
import {Alert, Pressable} from 'react-native';
import { formatDate } from '@src/transforms/utils';
import { Metrics } from "@src/themes";
import {GroupAppointment} from "@src/modules/group-appointments/types/classes";
import {Button, Text, Icon} from '@ui-kitten/components';
import FastImage from "react-native-fast-image";

import styles from './GroupAppointmentsListItemStyle';

interface Props {
  extraPadding: boolean;
  appointment: GroupAppointment;
  onPress: (item: GroupAppointment) => void;
  admin?: boolean
  onDelete? : (id:string) => void
}

const DeleteIcon = (params) => {
  return <Icon {...params} name={'trash'}/>
}

export const GroupAppointmentListItem = (props: Props) => {
  const {date, time} =  formatDate(props.appointment.date);

  const onPress = () => {
    props.onPress(props.appointment);
  }

  const onDeleteConfirmed = () => {
    props.onDelete(props.appointment.id)
  }

  const onDelete = () => {
    Alert.alert('Atentie!', 'Sigur doresti sa stergi aceasta intalnire ?', [
      {
        text: 'Nu',
        style: 'cancel',
      },
      {
        text: 'Da',
        onPress: onDeleteConfirmed,
      },
    ]);
  }

  const renderDelete = () => {
    if(!props.admin){
      return ;
    }
    return (
      <Button
        style={styles.button}
        accessoryLeft={DeleteIcon}
        appearance={'ghost'}
        onPress={onDelete}
      />
    )
  }

  return (
    <Pressable style={[styles.container, props.extraPadding ? {top: Metrics.vertical._40} : {}]} onPress={onPress}>
      {renderDelete()}
      <FastImage
        style={{...styles.image, backgroundColor: props.appointment.backgroundColor}}
        resizeMode={'contain'}
        source={{uri: props.appointment.image}}
      />
      <Text category={"h6"} style={styles.title}>{props.appointment.title}</Text>
      <Text category={"label"} style={styles.dateTime}>{date+' '+time}</Text>
    </Pressable>
  );
};
