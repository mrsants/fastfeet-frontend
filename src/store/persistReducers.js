import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfett',
      storage,
      whitelist: ['auth', 'orders', 'deliverymans'],
    },
    reducers
  );

  return persistedReducer;
};
