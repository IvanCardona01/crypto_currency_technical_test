import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { queryClient } from './src/business-logic/client/query-client';
import CryptoListScreen from './src/screens/crypto-list/crypto-list-screen';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <QueryClientProvider client={queryClient}>
        <CryptoListScreen />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
