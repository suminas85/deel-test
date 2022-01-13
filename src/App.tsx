import { AppContextProvider } from "~/context/AppContext";
import SearchForm from "~/components/SearchForm";
import SearchResult from "~/components/SearchResult";

import styles from "./App.module.scss";

const App = () => {
  return (
    <AppContextProvider>
      <div className={styles.root}>
        <h2>Currency data</h2>
        <SearchForm />
        <SearchResult />
      </div>
    </AppContextProvider>
  );
};

export default App;
