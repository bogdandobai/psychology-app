import { StyleSheet } from 'react-native';
import { Metrics } from '@src/themes';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    width: Metrics.screenWidth - 60,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  iconContainer: {
    alignItems: 'center',
    marginBottom: Metrics.vertical._12,
  },

  icon: {
    width: 40,
    height: 40,
  },

  title: {
    marginBottom: Metrics.vertical._8,
  },

  button: {
    marginTop: Metrics.vertical._20,
  },
});
