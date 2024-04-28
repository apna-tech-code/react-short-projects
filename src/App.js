import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/tic-tac-toe" Component={TicTacToe}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
