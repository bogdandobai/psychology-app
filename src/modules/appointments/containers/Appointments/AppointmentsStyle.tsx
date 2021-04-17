import {StyleSheet} from "react-native";
import {Metrics} from "@src/themes";

export default StyleSheet.create({
  backgroundGraphic: {
    backgroundColor: 'rgb(213,191,187)',
    width:'100%',
    height:'45%',
    borderBottomLeftRadius: Metrics.horizontal._32,
    borderBottomRightRadius: Metrics.horizontal._32,
    justifyContent:'center'
  },
})
