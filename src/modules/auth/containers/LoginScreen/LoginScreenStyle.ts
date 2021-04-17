import {StyleSheet} from "react-native";
import {Colors, Metrics} from "@src/themes";

export default StyleSheet.create({
  flex: {
    flex: 1,
    // justifyContent: 'space-evenly',
    backgroundColor: '#fdfaef'
  },
  padding: {
    paddingHorizontal: Metrics.horizontal._24,
    backgroundColor: '#fdfaef',
  },
  buttonWrapper:{
    backgroundColor:'white',
    paddingHorizontal: Metrics.horizontal._48
  },
  title: {
    backgroundColor:'transparent',
    alignSelf:'center',
    color: Colors.white
  },
  subTitle:{
    paddingVertical: Metrics.vertical._12,
    color: Colors.brown
  },
  backgroundGraphic: {
    backgroundColor: 'rgb(213,191,187)',
    width:'100%',
    height:'25%',
    borderBottomLeftRadius: Metrics.horizontal._32,
    borderBottomRightRadius: Metrics.horizontal._32,
    position:'absolute',
    top:0
  },
});
