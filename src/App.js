import "./App.scss";
import Header from "./components/Header/Header";
import { categories } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header res={categories} />
    </div>
  );
}

export default App;
