import React from 'react';
import Root from './src/components/navigation/Root';
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaProvider>

  );
};

export default App;
