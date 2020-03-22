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

export default function Product({ product }) {
  return (
    <PseudoBox
      _hover={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      m="40px"
      maxW="md"
      shadow="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <Link href={product.url} isExternal>
        <Stack>
          <Image rounded="md" src={product.image} />
          <Stack p="15px">
            <Text fontWeight="semibold" fontSize="2xl">
              {product.description}
            </Text>
            <Text color="gray.600" fontWeight="bold" fontSize="sm">
              {product.tags.map(t => (
                <Badge key={t} rounded="lg" mr={3}>
                  {t}
                </Badge>
              ))}
            </Text>
          </Stack>
        </Stack>
      </Link>
    </PseudoBox>
  );
}
