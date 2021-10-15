import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["admin", "paymentLoading"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
