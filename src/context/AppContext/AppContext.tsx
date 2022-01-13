import React, { createContext, useContext, useState } from "react";

interface IAppContextInterface {
  activeCurrency: object;
  handleCurrencySelect: (a: object) => void;
  handleCurrencyValueChange: (a: string) => void;
  currencyOptions: { id: string; name: string }[];
  isCurrencyDataLoading: boolean;
}

const AppContext = createContext<IAppContextInterface>({
  activeCurrency: {},
  handleCurrencySelect: () => {},
  handleCurrencyValueChange: () => {},
  currencyOptions: [],
  isCurrencyDataLoading: false,
});

const useAppContext = (): IAppContextInterface => useContext(AppContext);

const AppContextProvider = (
  props: React.PropsWithChildren<Record<string, unknown>>
): JSX.Element => {
  const [activeCurrency, setActiveCurrency] = useState({});
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [isCurrencyDataLoading, setCurrencyDataLoading] = useState(false);

  const handleCurrencySelect = (data: object) => {
    setActiveCurrency(data);
  };

  const handleCurrencyValueChange = (value: string) => {
    setActiveCurrency({});

    if (typeof value === "string" && value.length >= 3) {
      setCurrencyDataLoading(true);

      fetch("./response.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then(({ data }) => {
          const filteredData = data.filter((item: { name: string }) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
          });

          // Just a request delay emulation
          setTimeout(() => {
            setCurrencyOptions(filteredData);
            setCurrencyDataLoading(false);
          }, 350);
        });
    } else {
      setCurrencyOptions([]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeCurrency,
        handleCurrencySelect,
        handleCurrencyValueChange,
        currencyOptions,
        isCurrencyDataLoading,
      }}
      {...props}
    />
  );
};

const AppContextConsumer = AppContext.Consumer;

export { useAppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
