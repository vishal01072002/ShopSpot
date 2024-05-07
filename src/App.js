import './App.css';
import { AddProduct } from "./pages/AddProduct";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      App
      <Routes>
        <Route element={<AddProduct/>} path='/addProduct'/>
      </Routes>
    </div>
  );
}

export default App;
