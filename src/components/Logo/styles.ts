import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  fitnest: {
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 54,
    color: Colors.black,
  },
  dark: {
    fontWeight: '700',
    fontSize: 50,
    lineHeight: 75,
    color: Colors.purple,
  },
  white: {
    fontWeight: '700',
    fontSize: 50,
    lineHeight: 75,
    color: Colors.white,
  },
});
export default styles;
