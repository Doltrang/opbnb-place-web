import { Button, Flex, Text } from "@chakra-ui/react";
import "@fontsource/rampart-one";
import "@fontsource/potta-one";
import { useMetaMask } from "metamask-react";
import Title from "../Title";

const ConnectButton: React.FC = () => {
  const { connect, status } = useMetaMask();

  return (
    <Flex
      direction="column"
      style={{ backgroundImage: `url())`, backgroundRepeat: "no-repeat" }}
      width="700px"
      height="700px"
      ml="auto"
      mr="auto"
      align="center"
      border="0px solid lightgrey"
      borderRadius="0px"
      p="80px"
      pb="100px"
    >
      <Title />
      <Text color="gray.600" fontSize="17pt" fontWeight={400}>
        Please connect metamask to getting started
      </Text>

      <Button
        bg="blue.300"
        color="white"
        fontSize="large"
        height="50px"
        type="submit"
        mt={4}
        width="100%"
        onClick={connect}
        isLoading={status === "connecting" || status === "initializing"}
      >
        Begin
      </Button>
    </Flex>
  );
};
export default ConnectButton;
