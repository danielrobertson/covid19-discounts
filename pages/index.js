import React from "react";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./components/header";
import ProductList from "./components/ProductList";

function Index() {
  const products = [];
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <ProductList products={products} />
    </ThemeProvider>
  );
}

export default Index;
