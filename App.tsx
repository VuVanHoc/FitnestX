import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingRouter from 'src/routers/OnboardingRouter';

const App = () => {
  return (
    <NavigationContainer>
      <OnboardingRouter />
    </NavigationContainer>
  );
};

export default App;
