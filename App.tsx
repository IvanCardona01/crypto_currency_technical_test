import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { queryClient } from './src/business-logic/client/query-client';
import CryptoListScreen from './src/views/crypto-list/crypto-list-view';


function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1 }}>
          <CryptoListScreen />
        </SafeAreaView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
