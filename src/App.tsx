import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Products";
import Computers from "./routes/Products/Computers";

export default function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="/products" element={<Products />} />
          <Route path="/computers" element={<Computers />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

