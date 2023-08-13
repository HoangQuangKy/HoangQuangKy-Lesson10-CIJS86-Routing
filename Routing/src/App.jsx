import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import HomeComponents from "./components/HomeComponents"
import AuthComponent from "./components/authComponent"
import Products from "./components/products"
import Cart from "./components/Cart"
import Profile from "./components/Profile"
import Invoices from "./components/Invoices"
import About from "./components/About"
import ProductDetail from "./components/ProductDetail"
import InvoicesDone from "./components/InvoicesDone"
function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomeComponents></HomeComponents>}></Route>
          <Route path="/auth" element={<AuthComponent></AuthComponent>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/products/:productid" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/invoices" element={<Invoices></Invoices>}></Route>
          <Route path="/invoices/:InvoiceId" element={<InvoicesDone></InvoicesDone>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
