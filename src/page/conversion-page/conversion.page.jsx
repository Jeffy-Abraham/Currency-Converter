import React, { useContext } from "react";
import { ListContext } from "../../context/listExchangeRate-context/listExchangeRate-context";
import "./conversion.style.css";
import countryLookUp from "./lookupData";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

const Conversion = () => {
  var exchangeList = useContext(ListContext);
  var Keys = Object.keys(exchangeList);
  return (
    <div className="Grid-Layout">
      <div className="Grid-Heading">
        <div className="Grid-Title">
          <span>US Dollar (USD) Exchange Rates</span>
        </div>
      </div>
      <div className="Display-Table-Container">
        <table className="Display-Table">
          <tr className="Display-Table-Rows">
            <th>Currency</th>
            <th>Currency Name</th>
            <th>Exchange Rate= 1USD</th>
          </tr>
          {Keys.length === 0 ? (
            <React.Fragment>
              <ClipLoader className="Center" />
            </React.Fragment>
          ) : (
            <tbody>
              {Keys.map((data) => {
                return (
                  <tr key={Math.random()} className="Display-Content">
                    <td>{data}</td>
                    <td>{countryLookUp[data].name}</td>
                    <td>{exchangeList[data]}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Conversion;
Conversion.propTypes = {
  exchangeList: PropTypes.number,
};
