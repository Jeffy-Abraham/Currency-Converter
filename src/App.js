import React, {Suspense} from "react";
import "./App.css";
import Headers from "./components/header-component/navigation-component";
import { Switch, Route, useLocation } from "react-router-dom";
import Currency from "./page/currency-page/currency.page";
import Conversion from "./page/conversion-page/conversion.page";
import ExchangeRateProvider from "./context/exchangeRate-context/exchangeRate-context";
import ListStateRateProvider from "./context/listExchangeRate-context/listExchangeRate-context";


const App = () => {
  return (
    <div>
      <Headers />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ExchangeRateProvider>
              <Currency />
            </ExchangeRateProvider>
          )}
        />

        <Route
          exact
          path="/exchange"
          render={(props) => (
            <ListStateRateProvider>
              <Conversion />
            </ListStateRateProvider>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
