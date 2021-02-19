import { createContext } from "react";
import { CURRENCY_DATA } from "./data";
const CountryData = createContext({
  CurrencyData: CURRENCY_DATA,
 
});

export default CountryData;
