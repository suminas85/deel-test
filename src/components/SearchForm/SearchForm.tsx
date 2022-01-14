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
      <p className={styles.note}>
        <b>Note:</b> you can find all currency names by using this autocomplete,
        just somethig like a <b>"dollar"</b>, <b>"gold"</b> or <b>"peso"</b>. At
        least <b>3 symbols</b> to search.
      </p>
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
