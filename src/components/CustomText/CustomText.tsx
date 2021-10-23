import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface CustomTextProps {
  children: string;
  style?: any;
}
export default function CustomText(props: CustomTextProps) {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  );
}
