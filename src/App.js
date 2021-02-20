import React, { Suspense } from "react";
import "./App.css";
import Headers from "./components/header-component/navigation-component";
import { Switch, Route, useLocation } from "react-router-dom";
import Currency from "./page/currency-page/currency.page";
import ExchangeRateProvider from "./context/exchangeRate-context/exchangeRate-context";
import ListStateRateProvider from "./context/listExchangeRate-context/listExchangeRate-context";
import ClipLoader from "react-spinners/ClipLoader";
const Conversion = React.lazy(() =>
  import("./page/conversion-page/conversion.page")
);

const App = () => {
  return (
    <div>
      <Headers />
      <Suspense fallback={<ClipLoader className='Center'/>}>
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
      </Suspense>
    </div>
  );
};

export default App;
