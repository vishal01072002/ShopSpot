import './App.css';
import { AddProduct } from "./pages/AddProduct.jsx";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      App
      <Routes>
        <Route Component={AddProduct} path='/addProduct'/>
      </Routes>
    </div>
  );
}

export default App;
