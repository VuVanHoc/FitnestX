import CustomText from '../CustomText';
import {LogoTypeEnum} from '../../enums/LogoTypeEnum';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface LogoProps {
  type?: LogoTypeEnum;
}
export default function Logo({type}: LogoProps) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.fitnest}>Fitnest</CustomText>
      <CustomText
        style={type === LogoTypeEnum.Dark ? styles.dark : styles.white}>
        X
      </CustomText>
    </View>
  );
}
