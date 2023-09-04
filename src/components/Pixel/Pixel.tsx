import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { DIMENSION, PIXEL_COLORS } from "../../util/colors";
import { toast } from "react-toastify";
import { useConnectedMetaMask } from "metamask-react";
import { BASE_URL } from "../../util/consts";
import { Contract, ethers } from "ethers";

interface PixelProps {
  mouseHeld: boolean;
  colorSelected: number;
  defaultBg: number;
  index: number;
  contract: Contract | null;
}

const Pixel: React.FC<PixelProps> = ({
  mouseHeld,
  colorSelected,
  defaultBg,
  index,
  contract,
}) => {
  const { account } = useConnectedMetaMask();
  const [pixelColor, setPixelColor] = useState(0);

  useEffect(() => {
    setPixelColor(defaultBg);
  }, [defaultBg]);

  const updatePixelColor = async () => {
    if (colorSelected !== pixelColor && contract) {
      try {
        const tx = await contract.placePixel(index, colorSelected, 0, {
          value: ethers.parseEther("0.001"),
        });
        // Currently the transaction has been sent to the mempool,
        // but has not yet been included. So, we...
        // ...wait for the transaction to be included.
        await tx.wait();

        // TODO: Should be update all BE
        console.log("Updating pixel to server", colorSelected, index);
        await fetch(`${BASE_URL}/pixel/update`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            address: account,
            loc: {
              x: Math.floor(index / DIMENSION),
              y: index % DIMENSION,
            },
            color: colorSelected,
          }),
        }).then((response) => {
          if (response.status === 403) {
            response.json().then((error) => {
              if (error.remWait) {
                toast.error(`Please wait for next action: ${error.remWait}s`);
              }
            });
          }
        });
      } catch (error: any) {
        toast.error(error.toString());
      }
    }
  };

  return (
    <Box
      onMouseOver={() => (mouseHeld ? updatePixelColor() : false)}
      onClick={() => updatePixelColor()}
      height="10px"
      width="10px"
      bg={PIXEL_COLORS[pixelColor]}
    ></Box>
  );
};
export default Pixel;
