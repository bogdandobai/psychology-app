import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { NoteClass } from "@src/modules/group-appointments/types/classes";
import {Button, Icon, Text} from '@ui-kitten/components';
import {Colors, Metrics} from "@src/themes";

interface Props {
  note: NoteClass;
  onPress: (note) => void;
}

const RenderIcon = (params) => (
  <Icon {...params} name={'arrow-right'} />
);

export const Note = (props: Props) => {

  const onPress = () => {
    props.onPress(props.note);
  }

  return(
    <Pressable style={styles.container} onPress={onPress}>
      <Text
        category={"h6"}
        style={styles.title}
        numberOfLines={1}
      >{props.note.title}</Text>
      <Button
        size={'small'}
        accessoryLeft={RenderIcon}
        onPress={onPress}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical: Metrics.vertical._10,
    backgroundColor: Colors.pink,
    width:'100%',
    paddingVertical: Metrics.vertical._10,
    borderRadius: Metrics.horizontal._8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: Metrics.horizontal._12
  },
  title:{
    flex:1
  }
})
