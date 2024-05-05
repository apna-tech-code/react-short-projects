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
import Rating from "./Components/Rating/Rating";
import ShareBtn2 from "./Components/ShareBtn2/ShareBtn2";


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
          <Route path="/share-btn2" Component={ShareBtn2}></Route>
          <Route path="/showcase-gallery" Component={ShowcaseGallery}></Route>
          <Route path="/rating" Component={Rating}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
