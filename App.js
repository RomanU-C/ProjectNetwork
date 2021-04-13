import React from 'react';
import Root from './src/components/navigation/Root';
import { Provider } from 'react-redux'
import store from './src/redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
     
  );
  
};

export default App;
