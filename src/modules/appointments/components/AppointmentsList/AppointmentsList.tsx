import * as React from 'react';
import { Alert, SectionList, View} from 'react-native';
import {AppointmentListItem} from "@src/modules/appointments/components";
import {Colors, Metrics} from "@src/themes";
import {AppointmentClass} from "@src/modules/appointments/types/class";
import {useRef, useState} from "react";
import {ModalBox} from "@src/components";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Text, Button, Icon, Spinner} from "@ui-kitten/components";
import {isIphone} from "@src/transforms/utils";


interface Props {
  data: AppointmentClass[];
  onEdit?: (item: AppointmentClass) => void;
  loading?: boolean;
}


const ButtonIcon = (params) => (
  <Icon {...params} name={'save'} />
);

export const AppointmentsList = (props: Props) => {
  const modalRef = useRef(null);
  const [currentAppointment, setCurrentAppointment] = useState<AppointmentClass>(null);
  const [date, setDate] = useState<Date>(new Date());

  const data = [
    {title:'Sedinte Viitoare', data: props.data.filter((item)=>(item.date as Date)>new Date())},
    {title:'Sedinte Anterioare', data: props.data.filter((item)=>(item.date as Date)<new Date())}
  ]

  const onEdit = (appointment) => {
    setCurrentAppointment(appointment)
    modalRef.current.showModal();
  }

  const renderItem = ({ item }: { item: AppointmentClass }) => {
    return (
      <AppointmentListItem appointment={item} onEdit={onEdit}/>
    )
  };

  const renderFooter = () => {
    if (!props.loading) {
      return null;
    }
    return <Spinner size={'small'} />;
  };

  const keyExtractor = (item: AppointmentClass) => item.id.toString();

  const onSave = () => {
  }

  const renderFooterComponent = () => {
    return(
      <Button
        onPress={onSave}
        accessoryRight={ButtonIcon}
      />
    )
  }

  const renderSectionSeparator = ({section}) => {
    return (
      <View style={{flexDirection:'row', alignItems:'center', paddingTop: Metrics.vertical._20}}>
        <View style={{height:2, width:Metrics.horizontal._43, backgroundColor:Colors.gray}}/>
        <Text category={"h6"}>{`  ${section.title}`}</Text>
      </View>
    );
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const renderModal = () => {
    if(isIphone()) {
      return (
        <ModalBox ref={modalRef} title={'Schimbare Data'} renderFooterComponent={renderFooterComponent}>
          <DateTimePicker
            display={'spinner'}
            mode={"datetime"}
            onChange={onChange}
            value={date}
            testID="dateTimePicker"
          />
        </ModalBox>
      )
    } else {
      return(
        <DateTimePicker
          display={'default'}
          // mode={""}
          onChange={onChange}
          value={date}
          testID="dateTimePicker"
        />
      )
    }
  }

  return (
    <View style={{ flex: 1, paddingTop: Metrics.vertical._20 }}>
      <SectionList
        style={{flex:1, zIndex:20}}
        sections={data}
        contentContainerStyle={{paddingHorizontal: Metrics.horizontal._12}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={renderFooter}
        renderSectionHeader={renderSectionSeparator}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
      {/*{renderModal()}*/}
    </View>
  );
};
