import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserHistory } from "history";
import { MuiThemeProvider } from "@material-ui/core/styles";

// install setup components
import setupStore from "./setupStore";
import theme from "./setupTheme";

// import components
import Dashboard from "./Services/Dashboard";
import User from "./Services/User";
import CreatePin from "./Services/CreatePin";

const history = createBrowserHistory();
const { store, persistor } = setupStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/create-pin/" component={CreatePin} />
              <Route path="/user/" component={User} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </ConnectedRouter>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
