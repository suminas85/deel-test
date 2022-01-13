import { FC } from "react";

import Autocomplete from "~/components/Autocomplete";
import { useAppContext } from "~/context/AppContext";

import styles from "./SearchForm.module.scss";

const SearchForm: FC = () => {
  const {
    handleCurrencyValueChange,
    currencyOptions,
    isCurrencyDataLoading,
    handleCurrencySelect,
  } = useAppContext();

  return (
    <div className={styles.form}>
      <Autocomplete
        name={"currAutocomplete"}
        label={"Search currency"}
        onChange={handleCurrencyValueChange}
        onSelect={handleCurrencySelect}
        options={currencyOptions}
        loading={isCurrencyDataLoading}
      />
    </div>
  );
};

export default SearchForm;
