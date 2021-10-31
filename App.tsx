import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRouter from 'src/routers/AuthRouter';

const App = () => {
  return (
    <NavigationContainer>
      <AuthRouter />
    </NavigationContainer>
  );
};

export default App;
