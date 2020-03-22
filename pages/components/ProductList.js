import React from "react";

import {
  Box,
  PseudoBox,
  Stack,
  Image,
  Text,
  Badge,
  Link,
  Flex
} from "@chakra-ui/core";
import Product from "./Product";

function ProductList({ products }) {
  const product = {
    url:
      "https://www.theverge.com/2020/3/16/21181915/synth-apps-free-moog-korg-kaossilator-minimoog-model-d-coronavirus",
    image:
      "https://cdn.vox-cdn.com/thumbor/qddoUUO-My0VeIVGOy9dUdUVYg4=/0x0:640x365/920x613/filters:focal(269x132:371x234):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66508573/dims.0.jpg",
    description:
      "Moog and Korg are offering synth apps for free while we’re all stuck at home",
    tags: ["music", "mobile app"]
  };
  products.push(product);
  console.log(products);
  const productList = products.map(p => <Product key={p.url} product={p} />);
  return <Box>{productList}</Box>;
}

export default ProductList;

export async function getServerSideProps(context) {
  return {
    props: {} // will be passed to the page component as props
  };
}
