import React from 'react';
import {Provider} from 'react-redux';
import store from "@app/redux/store";
import StackNavigator from "./StackNavigator";
// import {PersistGate} from 'redux-persist/integration/react'
// import {persistStore} from 'redux-persist';

export default App = () => {
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistStore(store)}>*/}
        <StackNavigator />
      {/*</PersistGate>*/}
    </Provider>
  );
};
