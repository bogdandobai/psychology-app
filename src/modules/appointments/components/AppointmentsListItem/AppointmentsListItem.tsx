import * as React from 'react';
import { View, Pressable } from 'react-native';
import { formatDate } from '@src/transforms/utils';
import {Button, Icon} from "@ui-kitten/components";
import {AppointmentClass} from "@src/modules/appointments/types/class";
import { Text} from '@ui-kitten/components'

import styles from './AppointmentsListItemStyle';


interface Props {
  appointment: AppointmentClass;
  onEdit: (item: AppointmentClass) => void;
}

const EditIcon = (props) => (
  <Icon {...props} name={'edit'} fill={'black'} />
);

export const AppointmentListItem = (props: Props) => {
  const {date, time} =  formatDate(props.appointment.date);

  const onEdit = () => {
    props.onEdit(props.appointment);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} disabled={true}>
        <Text category={'label'} style={styles.text}>{time}</Text>
        <Text category={'label'} style={styles.date}>{date}</Text>
      </Pressable>
      <Button
        style={{height:'100%'}}
        onPress={onEdit}
        accessoryRight={EditIcon}
      />
    </View>
  );
};
