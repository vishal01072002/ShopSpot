import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AddProduct } from "./pages/AddProduct";
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductDetails from './components/ProductDetails';
import NoMatch from './components/NoMatch';
import Order from './components/Order';
import ProductForm from './components/ProductForm';
import { Home } from './pages/Home';
// import PaymentGatewayPage from './pages/Payment';
import CheckoutCart from './pages/Cart';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: "#F9F4F3"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/modifyproduct/:productId" element={<ProductForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/editProduct/:productId' element={<AddProduct/>}/>
          <Route path='/Cart' element={<CheckoutCart />} />
          {/* <Route path='/Payment' element={<PaymentGatewayPage />} /> */}
          <Route path="/orders" element={<Order />} />
          <Route path="/home" element={<Content />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

// categories 'APPAREL', 'ELECTRONICS', 'FOOTWEAR', 'PERSONAL CARE'