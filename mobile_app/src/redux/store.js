import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {encryptTransform} from 'redux-persist-transform-encrypt';
import DeviceInfo from 'react-native-device-info';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const deviceId = DeviceInfo.getUniqueId();

const encryptor = encryptTransform({
  secretKey: deviceId,
  onError(error) {
    console.log('store.encryptor: ', error);
  },
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  transforms: [encryptor],
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
persistStore(store);

export default store;
