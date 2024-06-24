import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductPage from "./pages/products-list-page";
import NotFoundPage from "./pages/not-found-page";
import MainLayout from "./layouts/main-layout";
import ProductsListPage from "./pages/products-list-page";
import CreateProductPage from "./pages/create-product-page";

type AppProp = {};

const App: React.FC<AppProp> = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
