import {StyleSheet} from "react-native";
import {Metrics} from "@src/themes";

export default StyleSheet.create({
  subtitle: {
    paddingTop: Metrics.vertical._20
  },
  image:{
    width: Metrics.horizontal._160,
    height: Metrics.horizontal._160,
    borderRadius: Metrics.horizontal._80,
    marginVertical: Metrics.vertical._40
  },
  notesWrapper: {
    width:'100%',
    paddingTop: Metrics.vertical._40
  }
})
