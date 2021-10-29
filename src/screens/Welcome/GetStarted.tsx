import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'src/styles/theme';
import Logo from 'src/components/Logo';
import FitnestText from 'src/components/FitnestText';
import {RouterNameEnum} from 'src/enums/RouterNameEnum';

interface GetStartedProps {
  navigation: any;
}
export default function GetStarted({navigation}: GetStartedProps) {
  const onPressGetStarted = React.useCallback(() => {
    navigation.navigate(RouterNameEnum.Onboarding);
  }, [navigation]);

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.purple, Colors.blue]}>
      <View style={styles.logoWrapper}>
        <Logo />
        <FitnestText style={styles.slogan}>Everybody Can Train</FitnestText>
      </View>
      <TouchableOpacity style={styles.getStarted} onPress={onPressGetStarted}>
        <FitnestText style={styles.getStartedText}>Get Started</FitnestText>
      </TouchableOpacity>
    </LinearGradient>
  );
}
