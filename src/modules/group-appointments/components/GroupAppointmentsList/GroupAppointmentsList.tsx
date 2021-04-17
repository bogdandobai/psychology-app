import * as React from 'react';
import {FlatList, View} from 'react-native';
import {GroupAppointmentListItem} from "@src/modules/group-appointments/components";
import {GroupAppointment} from "@src/modules/group-appointments/types/classes";

import styles from './GroupAppointmentsListStyle';
import {Metrics} from "@src/themes";
import {Spinner, Text} from "@ui-kitten/components";

interface Props {
  data: GroupAppointment[];
  onPress?: (item: GroupAppointment) => void;
  loading?: boolean;
  admin? :boolean
  onDelete?: (id: string) => void
}

export const GroupAppointmentsList = (props: Props) => {

  const renderItem = ({ item, index }) => {
    return (
      <GroupAppointmentListItem
        admin={props.admin}
        onPress={props.onPress}
        extraPadding={index%2!==0}
        appointment={item}
        onDelete={props.onDelete}
      />
    )
  };

  const renderFooter = () => {
    if (!props.loading && props.data.length===0) {
      return <View style={{justifyContent:'center', flex:1 ,height: 400}}>
        <Text category={'h6'}>Nu exista sedinte pentru acest grup</Text>
      </View>
    }
    if(props.loading){
      return <Spinner size={'small'} />;
    }
    return <View/>;
  };

  const keyExtractor = (item: GroupAppointment) => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.data}
        numColumns={2}
        contentContainerStyle={{paddingBottom: Metrics.horizontal._80}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={{alignItems:'center', justifyContent:'center'}}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};
