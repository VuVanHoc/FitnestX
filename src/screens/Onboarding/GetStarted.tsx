import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles/theme';
import CustomText from '../../components/CustomText';
import Logo from '../../components/Logo';

export default function GetStarted() {
  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.purple, Colors.blue]}>
      <View style={styles.logoWrapper}>
        <Logo />
        <CustomText style={styles.slogan}>Everybody Can Train</CustomText>
      </View>
      <TouchableOpacity style={styles.getStarted}>
        <CustomText style={styles.getStartedText}>Get Started</CustomText>
      </TouchableOpacity>
    </LinearGradient>
  );
}
