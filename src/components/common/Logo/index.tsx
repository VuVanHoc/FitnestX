import FitnestText from '../FitnestText';
import {LogoTypeEnum} from '../../../enums/LogoTypeEnum';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface LogoProps {
  type?: LogoTypeEnum;
}
export default function Logo({type}: LogoProps) {
  return (
    <View style={styles.container}>
      <FitnestText style={styles.fitnest}>Fitnest</FitnestText>
      <FitnestText
        style={type === LogoTypeEnum.Dark ? styles.dark : styles.white}>
        X
      </FitnestText>
    </View>
  );
}
