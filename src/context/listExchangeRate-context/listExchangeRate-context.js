import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ListContext = createContext();

const ListStateProvider = ({ children }) => {
  const [exchangeRates, setData] = useState({});

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((res) => {
      setData(res.data.rates);
    });
  }, []);
  return (
    <ListContext.Provider value={exchangeRates}>
      {children}
    </ListContext.Provider>
  );
};

export default ListStateProvider;
