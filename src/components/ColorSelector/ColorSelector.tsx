import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { PIXEL_COLORS } from "../../util/colors";

type ColorSelectorProps = {
  setColorSelected: (color: number) => void;
  colorSelected: number;
};

const ColorSelector: React.FC<ColorSelectorProps> = ({
  setColorSelected,
  colorSelected,
}) => {
  return (
    <Flex ml="auto" mr="auto" flexDirection="column">
      <Flex
        justifyContent="center"
        py={3}
        px={5}
        width="200px"
        flexWrap="wrap"
        border="1.5px solid grey"
        bg="blackAlpha.300"
        height="240px"
        borderRadius={7}
      >
        <Text fontWeight={700} mb={2}>
          Select a Color
        </Text>
        {PIXEL_COLORS.map((colorCode: string, index: number) => (
          <Box
            key={index}
            onClick={() => setColorSelected(index)}
            borderRadius="5px"
            ml={2}
            height="30px"
            width="30px"
            bg={colorCode}
          ></Box>
        ))}
      </Flex>
      <Flex
        border="1.5px solid grey"
        height="40px"
        borderRadius={5}
        align="center"
        mt={5}
        bg="blackAlpha.300"
        flexDirection="row"
      >
        <Text fontSize="14pt" fontWeight={600} ml={4}>
          Selected Color
        </Text>
        <Box
          borderRadius="5px"
          ml="auto"
          mr={4}
          height="23px"
          width="23px"
          bg={PIXEL_COLORS[colorSelected]}
        ></Box>
      </Flex>
    </Flex>
  );
};
export default ColorSelector;
