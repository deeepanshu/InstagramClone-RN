import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 10,
  },
});

export default styles;
