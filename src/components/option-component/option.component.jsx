import React, { useContext } from "react";
import "./option.component.css";
import PropTypes from "prop-types";
import CountryData from "../../context/currency-context/currency-context";

const Options = ({
  currentCurrency: { currencyName, currency, symbol },
  amount,
  updateCurrency,
  updateAmount,
}) => {
  const { CurrencyData, setData } = useContext(CountryData);

  return (
    <div className="Currency-Container">
      <div className="Currency">Currency</div>
      <select onChange={(e) => updateCurrency(JSON.parse(e.target.value))}>
        <option className="Option-Data">
          {" "}
          {currencyName} ({currency})
        </option>
        {CurrencyData.map((currency) => {
          return (
            <option
              className="Option-Data"
              key={currency.id}
              value={JSON.stringify(currency)}
            >
              {" "}
              {currency.currencyName} ({currency.currency})
            </option>
          );
        })}
      </select>
      <div className="Currency" style={{ marginTop: "40px" }}>
        Enter Amount
      </div>
      <div className="Input-Currency">
        {" "}
        <div className="Symbol">{symbol}</div>
        <input
          type="number"
          value={amount}
          onChange={(e) => updateAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Options;
Options.propTypes = {
  currencyName: PropTypes.string,
  currency: PropTypes.string,
  symbol: PropTypes.string,
};
