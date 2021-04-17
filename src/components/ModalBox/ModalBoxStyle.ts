import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '@src/themes';

export default StyleSheet.create({
  modal: {
    alignSelf: 'center',
    width: Metrics.screenWidth,
    alignItems: 'center',
  },
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: Metrics.horizontal._8,
    width: Metrics.screenWidth - Metrics.horizontal._34,
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.horizontal._24,
    paddingVertical: Metrics.vertical._10
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '86%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: Metrics.vertical._24,
  },
  header: {
    width: '100%',
    borderBottomWidth: 1.2,
    borderBottomColor: Colors.gray,
    paddingVertical: Metrics.vertical._10,
    alignItems:'center'
  },
  buttonWrapper: {
    width: '45%',
  },

});
