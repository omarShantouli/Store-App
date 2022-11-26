import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import React from "react";
import Products from "./Pages/Products/FunctionalProduct";
//import Products from "./Pages/Products/Products";
import "./styles/mixins.scss";
import Categories from "./Pages/Categories/Categories";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout/Layout.js"

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Routes>
            <Route element={<Layout />} >
              <Route path="/products" element={<Products/>} />
              <Route path="/" element={< Categories />} />
            </Route>
      </Routes>
      </BrowserRouter>
      </div>
    );
  }
}


export default App;
