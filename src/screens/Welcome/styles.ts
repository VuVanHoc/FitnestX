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
  containerWelcomeView: {
    flex: 1,
  },
  imageWelcome: {
    width: '100%',
    height: '50%',
    resizeMode: 'stretch',
  },
  bottomViewWelcome: {
    paddingHorizontal: 30,
    paddingTop: 64,
    paddingBottom: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 15,
  },
  content: {
    fontSize: 14,
    color: Colors.gray1,
    lineHeight: 21,
    letterSpacing: 0.7,
  },
  nextStepWrapper: {
    alignItems: 'flex-end',
  },
  buttonNextStep: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default styles;
