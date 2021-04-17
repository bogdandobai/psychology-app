import { StyleSheet } from 'react-native';
import {Colors, Metrics} from '@src/themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: Metrics.horizontal._160,
    height: Metrics.vertical._200,
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: Metrics.vertical._30,
    // borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: Metrics.horizontal._8,
    borderColor: '#DEDEDE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    borderRadius: Metrics.horizontal._8,
    width:Metrics.horizontal._160,
    height:Metrics.vertical._120,
    backgroundColor: Colors.background
  },
  title: {
    paddingLeft: Metrics.horizontal._12
  },
  dateTime: {
    color: Colors.gray,
    paddingRight: Metrics.horizontal._12,
    alignSelf:'flex-end',
    paddingBottom: Metrics.vertical._12
  },
  button: {
    position:'absolute',
    top:-10,
    right:-10,
    zIndex:15,
    width:20,
    height:20,
    backgroundColor:'white',
    borderRadius:20
  }
});
