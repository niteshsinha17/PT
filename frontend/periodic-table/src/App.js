import "./App.css";
import Website from "./containers/Website/Website";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App dark-theme">
      <Website />
    </div>
    </BrowserRouter>
  );
}

export default App;
