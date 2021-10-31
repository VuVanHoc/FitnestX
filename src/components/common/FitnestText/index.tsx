import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface FitnestTextProps {
  children: string;
  style?: any;
}
export default function FitnestText(props: FitnestTextProps) {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  );
}
