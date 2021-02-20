import React, { createContext, useEffect, useContext } from "react";
import axios from "axios";
/*This context is responssible for holding all the information regarding excahnage currency operations*/
export const ExchangeRateContext = createContext();

class ExchangeRateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.updateTargetAmount = (currentAmount) => {
      this.setState({
        targetAmount: (currentAmount / this.state.exchangeRate).toFixed(3),
      });
      this.setState({ baseAmount: currentAmount });
    };
    this.updateBaseAmount = (currentAmount) => {
      this.setState({
        baseAmount: (currentAmount * this.state.exchangeRate).toFixed(3),
      });
      this.setState({ targetAmount: currentAmount });
    };
    //Insted of having a local state, move the state to the context such that it maintains single source of truth
    //Also it makes it easy when it comes to manipulating values
    //We use this method in input form , where we enter the amount to convert
    this.updateBaseCurrency = (data) => {
      this.setState({ baseCurrency: data }, function () {
        const { targetCurrency, baseCurrency } = this.state;

        this.updateExchangeRate(baseCurrency.currency, targetCurrency.currency);
      });
    };
    ////Insted of having a local state, move the state to the context such that it maintains single source of truth
    //Also it makes it easy when it comes to manipulating values
    //We use this method in input form , where we enter the amount to convert
    this.updateTargetCurrency = (data) => {
      this.setState({ targetCurrency: data }, function () {
        const { targetCurrency, baseCurrency } = this.state;

        this.updateExchangeRate(baseCurrency.currency, targetCurrency.currency);
      });
    };

    this.state = {
      updateBaseAmount: this.updateBaseAmount,
      updateTargetAmount: this.updateTargetAmount,
      updateBaseCurrency: this.updateBaseCurrency,
      updateTargetCurrency: this.updateTargetCurrency,
      //Holds the exchange rate(The value is set when components mounts for the first time and also when user selects the country)
      exchangeRate: 0,

      //Value changes when user selects the country in the <Options/>component
      baseCurrency: {
        id: 3,
        currency: "GBP",
        currencyName: "British Pound",
        symbol: "£",
        flag: "https://www.countryflags.io/GB/shiny/64.png",
      },
      targetCurrency: {
        id: 2,
        currency: "USD",
        currencyName: "American Dollar",
        symbol: "$",
        flag: "hhttps://www.countryflags.io/US/shiny/64.png",
      },
      baseAmount: 1,

      targetAmount: 1,
    };
  }
  componentDidMount() {
    const { baseCurrency, targetCurrency } = this.state;
    this.updateExchangeRate(baseCurrency.currency, targetCurrency.currency);
  }
  //use updateExchangeRate to update currency
  //it will take two params target currency and base currency :)
  //call this onComponent Mount

  updateExchangeRate = (base, target) =>
    axios
      .get(`https://api.exchangeratesapi.io/latest?symbols=${base},${target}`)
      .then((res) => {
        var exchangeRate = res.data.rates[base] / res.data.rates[target];
        this.setState({ exchangeRate: exchangeRate.toFixed(3) });
        this.setState({
          targetAmount: (this.state.baseAmount / exchangeRate).toFixed(3),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  render() {
    return (
      <ExchangeRateContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ExchangeRateContext.Provider>
    );
  }
}
export default ExchangeRateProvider;
