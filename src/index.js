import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import setupStore from "./setupStore";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserHistory } from "history";

// import components
import Dashboard from "./Services/Dashboard";
import User from "./Services/User";

const history = createBrowserHistory();
const { store, persistor } = setupStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/user/" component={User} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
