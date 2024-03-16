import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import Book from "./routes/Products/Book";
import About from "./routes/Products/About";
import NotFound from "./routes/Products/NotFound";
import HomeBody from "./routes/Home/HomeBody";



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="*" element={<NotFound />} />

          <Route path="products" element={<Products />}>
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Book />} />
          </Route>
          <Route path="about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter >
  );
}


