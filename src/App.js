import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import SignInOrSignUpWrapper from "./Components/SignInOrUp/SignInOrSignUpWrapper";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import TransitionComp from "./Components/TransitionComp/TransitionComp";
import ShareComponent from "./Components/Share/ShareComponent";
import ShareBtnComponent from "./Components/ShareBtn/ShareBtnComponent";
import ShowcaseGallery from "./Components/ShowcaseGallery/ShowcaseGallery";


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-center" theme="colored" autoClose={2000}/>
      <BrowserRouter>
        <Routes>
          <Route path="/tic-tac-toe" Component={TicTacToe}></Route>
          <Route path="/credential" Component={SignInOrSignUpWrapper}></Route>
          <Route path="/transition-ease" Component={TransitionComp}></Route>
          <Route path="/share" Component={ShareComponent}></Route>
          <Route path="/share-btn" Component={ShareBtnComponent}></Route>
          <Route path="/showcase-gallery" Component={ShowcaseGallery}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
