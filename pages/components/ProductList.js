import React from "react";

import {
  Box,
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
    .map((p) => (
      <Box>
        <Product key={p.url} product={p} />
      </Box>
    ));

  return (
    <Stack>
      <Flex
        justifyContent="flex-end"
        paddingTop={5}
        paddingRight={["30px", "150px", "150px", "150px"]}
      >
        <InputGroup>
          <Input
            value={searchValue}
            onChange={handleSearchInput}
            placeholder="Search..."
            size="lg"
            w={[
              "200px", // base
              "200px", // 480px upwards
              "300px", // 768px upwards
              "300px", // 992px upwards
            ]}
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
        gap={[2, 5, 5, 5]}
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
