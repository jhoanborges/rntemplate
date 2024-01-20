import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
//redux
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import TabOneScreen from './screens/TabOneScreen';
import TabTwoScreen from './screens/TabTwoScreen';
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabOneScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="TabTwoScreen" component={TabTwoScreen} />
        </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
