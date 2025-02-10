import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { queryClient } from './src/business-logic/client/query-client';
import CryptoListView from './src/views/crypto-list/crypto-list-view';
import CryptoDetailView from './src/views/crypto-detail/crypto-detail-view';
import { Routes } from './src/routes';
import { navigationRef } from './src/presentation-logic/navigation-service';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name={Routes.cryptoList}
              component={CryptoListView}
            />
            <Stack.Screen
              name={Routes.cryptoDetail}
              component={CryptoDetailView}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;