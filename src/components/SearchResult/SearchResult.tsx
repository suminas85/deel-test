import { FC } from "react";

import { useAppContext } from "~/context/AppContext";

import styles from "./SearchResult.module.scss";

// This component was done just for demo purposes
const SearchForm: FC = () => {
  const { activeCurrency } = useAppContext();

  return (
    <div className={styles.result}>
      <div className={styles.title}>Search result</div>
      <pre>{JSON.stringify(activeCurrency, undefined, 2)}</pre>
    </div>
  );
};

export default SearchForm;
