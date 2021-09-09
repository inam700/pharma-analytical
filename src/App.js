import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import ProductList from "./components/products/ProductList";
import Footer from "./components/footer/Footer";
import AboutCompany from "./components/about/AboutCompany";
import ProductDetails from "./components/products/ProductDetails";
import Contact from "./components/contact-us/ContactUs";
const App = () => {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path="/about-company" component={AboutCompany} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
