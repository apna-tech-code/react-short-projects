import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import SignInOrSignUpWrapper from "./Components/SignInOrUp/SignInOrSignUpWrapper";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'


function App() {
  return (
    <div className="App">
    <ToastContainer position="bottom-center" theme="colored" autoClose={2000}/>
      <BrowserRouter>
        <Routes>
          <Route path="/tic-tac-toe" Component={TicTacToe}></Route>
          <Route path="/credential" Component={SignInOrSignUpWrapper}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
