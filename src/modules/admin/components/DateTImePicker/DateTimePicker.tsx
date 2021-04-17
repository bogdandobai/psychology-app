import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "@ui-kitten/components";
import {Colors, Metrics} from "@src/themes";

interface Props {
  onConfirm:(date)=>void
}

export const DateTimePicker = React.memo((props:Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    props.onConfirm(date)
    hideDatePicker();
  };

  return (
    <>
      <Button style={styles.padding} onPress={showDatePicker}>
        Alege Data
      </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={"datetime"}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
});

const styles = StyleSheet.create({
  padding: {
    marginVertical: Metrics.vertical._18,
    borderColor: Colors.brown
  },
})
