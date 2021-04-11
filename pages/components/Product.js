import { Badge, Image, Link, PseudoBox, Stack, Text } from "@chakra-ui/core";
import React from "react";

export default function Product({ product }) {
  return (
    <PseudoBox
      _hover={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        transform: "scale(1.03)",
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
            <Text fontWeight="semibold" fontSize={["xl", "2xl", "2xl", "2xl"]}>
              {product.description}
            </Text>
            <Text color="gray.600" fontWeight="bold" fontSize="sm">
              {product.tags.map((t) => (
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

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
