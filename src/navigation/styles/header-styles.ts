import {Metrics} from "@src/themes";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: 'rgb(243,203,143)',
    height: Metrics.screenHeight * 0.22,
    borderBottomLeftRadius: Metrics.horizontal._32,
    borderBottomRightRadius: Metrics.horizontal._32,
  },
});
