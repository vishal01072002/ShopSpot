<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import ForgotPass from './pages/ForgotPass.jsx';
// import {Bingo} from "./pages/Bingo.jsx"
// import {useSelector, useDispatch} from "react-redux"
// import { setBoard, setStart } from './store/sclices/bingoSlice.js';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<Login/>} ></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/forgot' element={<ForgotPass/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
=======
import React from 'react'
import Homepage from './pages/Homepage.jsx'


const App = () => {
  return (

      <Homepage/>
    
  )
}

export default App
>>>>>>> c5519ab21544bec3a86e893fc337bc68cf5255bf
