import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Computers from "./routes/Products/Computers";
import Products from "./routes/Products";
import Electronics from "./routes/Products/Electronics";
import Book from "./routes/Products/Book";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="/products" element={<Products />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

