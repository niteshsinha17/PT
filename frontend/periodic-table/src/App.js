import "./App.css";
import Website from "./containers/Website/Website";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Website />
    </div>
    </BrowserRouter>
  );
}

export default App;
