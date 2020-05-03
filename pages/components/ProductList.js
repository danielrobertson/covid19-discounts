import React from "react";

import {
  Grid,
  Input,
  Stack,
  Flex,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/core";
import Product from "./Product";

function ProductList({ products }) {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const productList = products
    .filter((p) => {
      const toLwr = (str) => str.toLowerCase();
      const tags = p.tags.join();
      if (searchValue === "") return p;
      else if (
        toLwr(p.description).includes(toLwr(searchValue)) ||
        toLwr(tags).includes(toLwr(searchValue))
      ) {
        return p;
      }
    })
    .map((p) => <Product key={p.url} product={p} />);

  return (
    <Stack>
      <Flex justifyContent="flex-end" paddingTop={3} paddingRight="150px">
        <InputGroup>
          <Input
            value={searchValue}
            onChange={handleSearchInput}
            placeholder="Search..."
            size="lg"
            w="300px"
            rounded="18px"
          />
          <InputRightElement>
            <IconButton aria-label="Search" icon="search" variant="ghost" />
          </InputRightElement>
        </InputGroup>
      </Flex>

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
    </Stack>
  );
}

export default ProductList;

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
