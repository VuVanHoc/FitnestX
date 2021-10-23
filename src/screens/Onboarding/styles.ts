import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingHorizontal: 30,
    flex: 1,
  },
  logoWrapper: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  logo: {
    height: 35,
  },
  getStarted: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 99,
  },
  slogan: {
    fontWeight: '400',
    fontSize: 18,
    color: Colors.gray1,
  },
  getStartedText: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.blue,
  },
});

export default styles;
