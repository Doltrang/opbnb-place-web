import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { DIMENSION, PIXEL_COLORS } from "../../util/colors";
import { toast } from "react-toastify";
import { useConnectedMetaMask } from "metamask-react";
import { BASE_URL, CANVAS_UID } from "../../util/consts";

interface PixelProps {
  mouseHeld: boolean;
  colorSelected: number;
  defaultBg: number;
  index: number;
}

const Pixel: React.FC<PixelProps> = ({
  mouseHeld,
  colorSelected,
  defaultBg,
  index,
}) => {
  const { account } = useConnectedMetaMask();
  const [pixelColor, setPixelColor] = useState(0);

  useEffect(() => {
    setPixelColor(defaultBg);
  }, [defaultBg]);

  const updatePixelColor = async () => {
    if (colorSelected !== pixelColor) {
      try {
        console.log("Updating pixel to server", colorSelected, index);
        await fetch(`${BASE_URL}/pixel/update`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            uid: CANVAS_UID,
            uname: account,
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
