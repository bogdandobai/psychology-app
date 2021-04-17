import {StyleSheet} from "react-native";
import {Metrics} from "@src/themes";

export default StyleSheet.create({
  backgroundGraphic: {
    backgroundColor:'rgb(243,203,143)',
    width:'100%',
    height:0.25*Metrics.screenHeight,
    borderBottomLeftRadius: Metrics.horizontal._32,
    borderBottomRightRadius: Metrics.horizontal._32,
    justifyContent:'center',
    alignItems:'center',
  },
})
