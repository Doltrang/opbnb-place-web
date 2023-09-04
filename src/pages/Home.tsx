import React from "react";
import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Canvas from "./Canvas";
import ConnectButton from "../components/ConnectButton";
import { useMetaMask } from "metamask-react";

const Home: React.FC = () => {
  const { status } = useMetaMask();

  return (
    <>
      <Flex justifyContent="right">
        <ColorModeSwitcher />
      </Flex>
      <Flex>
        {!(status === "connected") && <ConnectButton />}

        {status === "connected" && (
          <>
            <Canvas />
          </>
        )}
      </Flex>
    </>
  );
};
export default Home;
