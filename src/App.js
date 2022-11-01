import { NewsFeed } from "./components/NewsFeed";
import { CurrencyConverter } from "./components/CurrencyConverter";

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
