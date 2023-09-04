import React from "react";
import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Canvas from "./Canvas";
import ConnectButton from "../components/Network/ConnectButton";
import { useMetaMask } from "metamask-react";
import WrongNetwork from "../components/Network/WrongNetwork";
import { opBnbChainNetworkParams } from "../util/consts";

const Home: React.FC = () => {
  const { status, chainId } = useMetaMask();
  console.log(chainId);

  const Content = () => {
    if (status !== "connected") {
      return <ConnectButton />;
    }
    if (
      chainId.toLocaleLowerCase() !==
      opBnbChainNetworkParams.chainId.toLocaleLowerCase()
    ) {
      return <WrongNetwork />;
    }
    return <Canvas />;
  };

  return (
    <>
      <Flex justifyContent="right">
        <ColorModeSwitcher />
      </Flex>
      <Flex>
        <Content />
      </Flex>
    </>
  );
};
export default Home;
