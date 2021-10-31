import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouterNameEnum} from 'src/enums/RouterNameEnum';
import GetStarted from 'src/screens/Welcome/GetStarted';
import Onboarding from 'src/screens/Welcome/Onboarding';

const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouterNameEnum.GetStarted}
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouterNameEnum.Onboarding}
        component={Onboarding}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
