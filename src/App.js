import { Route, Routes } from 'react-router-dom';
import './App.css';
// // import {Bingo} from "./pages/Bingo.jsx"
// // import {useSelector, useDispatch} from "react-redux"
// import { setBoard, setStart } from './store/sclices/bingoSlice.js';
import ForgotPass from './pages/ForgotPass.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import Homepage from './pages/Homepage.jsx';

function App() {

  return (
    <div className="App">
   
    <Routes>
      <Route path='/'element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/forgot' element={  <ForgotPass/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
