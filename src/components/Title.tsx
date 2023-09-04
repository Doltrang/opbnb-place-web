import { Flex, Text, useColorMode } from "@chakra-ui/react";

export default function Title() {
  const { colorMode } = useColorMode();
  return (
    <Flex justifyContent="center" mt={-5}>
      <Text
        style={{
          textShadow:
            colorMode === "light"
              ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000"
              : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff",
        }}
        color="yellow.300"
        fontFamily="Potta One"
        fontSize="7xl"
        as="span"
      >
        O
      </Text>
      <Text
        style={{
          textShadow:
            colorMode === "light"
              ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000"
              : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff",
        }}
        color="blue.300"
        fontFamily="Potta One"
        fontSize="7xl"
        as="span"
      >
        p
      </Text>
      <Text
        style={{
          textShadow:
            colorMode === "light"
              ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000"
              : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff",
        }}
        color="pink.300"
        fontFamily="Potta One"
        fontSize="7xl"
        as="span"
      >
        B
      </Text>
      <Text
        style={{
          textShadow:
            colorMode === "light"
              ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000"
              : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff",
        }}
        color="green.300"
        fontFamily="Potta One"
        fontSize="7xl"
        as="span"
      >
        n
      </Text>
      <Text
        style={{
          textShadow:
            colorMode === "light"
              ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 3px 0 #000"
              : "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 5px 3px 0 #fff",
        }}
        color="red.300"
        fontFamily="Potta One"
        fontSize="7xl"
        as="span"
      >
        B
      </Text>
      <Text
        mt="auto"
        mb={5}
        fontFamily="Potta One"
        fontSize="x-large"
        as="span"
      >
        /Place
      </Text>
    </Flex>
  );
}
