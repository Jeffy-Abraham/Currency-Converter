import React, { useContext, useState } from "react";
import Options from "../../components/option-component/option.component";
import { ExchangeRateContext } from "../../context/exchangeRate-context/exchangeRate-context";
import "./currency.style.css";

const Currency = () => {
  const {
    baseCurrency,
    targetCurrency,
    baseAmount,
    targetAmount,
    updateBaseCurrency,
    updateTargetCurrency,
    updateTargetAmount,
    updateBaseAmount,
  } = useContext(ExchangeRateContext);

  return (
    <div className="Grid-Layout">
      <div className="Grid-Heading">
        <div className="Grid-Title">Currency converter</div>
        <div className="Banner">
          {" "}
          <p>Enter the currency that you want to convert</p>
        </div>
      </div>
      <div className="Currency-Containers">
        <div className="Currency-Layout">
          <Options
            currentCurrency={baseCurrency}
            updateCurrency={updateBaseCurrency}
            amount={baseAmount}
            updateAmount={updateTargetAmount}
          />
        </div>
        <div className="Currency-Layout">
          <Options
            currentCurrency={targetCurrency}
            updateCurrency={updateTargetCurrency}
            amount={targetAmount}
            updateAmount={updateBaseAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default Currency;
//call an action reducer when the value updates and pass the data to the
//when the country changes calculate the exchange rate
//use exchange rate to calculate the input value
//pass once the exchange rate is, set multiply the exchange rate with our input value
