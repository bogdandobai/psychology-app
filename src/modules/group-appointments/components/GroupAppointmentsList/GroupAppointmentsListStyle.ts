import {StyleSheet} from "react-native";
import {Metrics} from "@src/themes";

export default StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.horizontal._16,
  },
})
