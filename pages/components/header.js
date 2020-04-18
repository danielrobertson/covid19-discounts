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
  Heading,
} from "@chakra-ui/core";

function Header() {
  return (
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
                textAlign="center"
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
                textAlign="center"
                fontWeight="semibold"
                color="white"
                fontSize="2xl"
                letterSpacing={0.5}
                px="15px"
              >
                To help you{" "}
                <u>
                  <Link href="https://www.flattenthecurve.com/">
                    stay home to flatten the curve
                  </Link>{" "}
                </u>
                during COVID-19
              </Text>
            </Flex>
            <Flex justify="center"></Flex>
          </Stack>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
