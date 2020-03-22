import React from "react";

import {
  Box,
  ThemeProvider,
  ColorModeProvider,
  LightMode,
  CSSReset,
  Stack,
  Image,
  Text,
  Link,
  Divider,
  Button,
  Icon,
  Flex,
  Avatar,
  PseudoBox,
  Heading
} from "@chakra-ui/core";

function Index() {
  return (
    <ThemeProvider>
      <CSSReset />
      <header>
        <Box
          h="600px"
          w="100%"
          backgroundImage="url('https://i.imgur.com/FJVb8vf.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Flex justify="center">
            <Stack mt="190px">
              <Flex justify="center">
                <Heading
                  mb={4}
                  color="white"
                  fontSize="6xl"
                  letterSpacing={0.5}
                >
                  Discounted Products
                </Heading>
              </Flex>
              <Flex justify="center">
                <Text
                  fontWeight="semibold"
                  color="white"
                  fontSize="2xl"
                  letterSpacing={0.5}
                >
                  In the era of COVID-19 and social distancing recommendations
                </Text>
              </Flex>
              <Flex justify="center"></Flex>
            </Stack>
          </Flex>
        </Box>
      </header>
    </ThemeProvider>
  );
}

export default Index;
