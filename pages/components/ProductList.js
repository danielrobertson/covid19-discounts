import React from "react";

import {
  Box,
  PseudoBox,
  Stack,
  Image,
  Text,
  Badge,
  Link,
  Grid,
} from "@chakra-ui/core";
import Product from "./Product";

function ProductList({ products }) {
  console.log(products);
  const productList = products.map((p) => (
    <Box>
      <Product key={p.url} product={p} />
    </Box>
  ));
  return (
    <Grid
      mx={[0, 20, 20, 20]}
      templateColumns={[
        "repeat(auto-fill, minmax(370px, 1fr))",
        "repeat(auto-fill, minmax(490px, 1fr))",
        "repeat(auto-fill, minmax(490px, 1fr))",
        "repeat(auto-fill, minmax(490px, 1fr))",
      ]}
      gap={6}
    >
      {productList}
    </Grid>
  );
}

export default ProductList;

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
