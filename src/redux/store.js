import contactsReducer from './contact/contactSlice';

// Redux-store-configure
import { configureStore } from '@reduxjs/toolkit';

// Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Redux-logger
import logger from 'redux-logger';

const middleware = [logger];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const exportStore = { store, persistor };
export default exportStore;
