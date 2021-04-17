import { StyleSheet } from 'react-native';
import {Colors, Metrics} from '@src/themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.vertical._16,
    paddingLeft: Metrics.horizontal._12,
    borderWidth: 1,
    borderRadius: Metrics.horizontal._8,
    borderColor: '#DEDEDE',
    backgroundColor: Colors.pink
  },
  pressable: {
    flex:0.7,
    justifyContent: 'space-between',
    paddingVertical: Metrics.vertical._10,
    paddingLeft: Metrics.horizontal._12,
  },
  image: {
    width: Metrics.horizontal._24,
    height: Metrics.horizontal._28,
  },
  text: {
    fontSize: Metrics.horizontal._14,
    lineHeight: Metrics.horizontal._17,
  },
  date: {
    fontSize: Metrics.horizontal._14,
    lineHeight: Metrics.horizontal._17,
  },
});
