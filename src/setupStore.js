import storage from "redux-persist/lib/storage";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Services/reducers";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";

export default (history) => {
  const reducer = persistReducer(
    {
      key: "app",
      storage: storage,
      whitelist: [],
    },
    rootReducer(history)
  );

  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)];

  const devToolOptions = {};

  if (process.env.NODE_ENV !== "production") {
    devToolOptions["trace"] = true;
  }
  const customerCompose = composeWithDevTools(devToolOptions);
  const store = createStore(
    reducer,
    customerCompose(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  return { store, persistor };
};
