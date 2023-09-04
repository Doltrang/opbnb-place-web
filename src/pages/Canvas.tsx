import { Flex } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import Pixel from "../components/Pixel/Pixel";
import ColorSelector from "../components/ColorSelector/ColorSelector";
import Title from "../components/Title";
import { DEFAULT_CANVAS, getCanvasPixels } from "../util/colors";
import { toast } from "react-toastify";
import { BASE_URL } from "../util/consts";
import useWebSocket from "react-use-websocket";

const Canvas = () => {
  const { lastMessage } = useWebSocket(
    `${BASE_URL.replace("http", "ws")}/opbnbplace`
  );
  const [localLastMessage, setLocalLastMessage] = useState("");

  const [mouseHeld, setMouseHeld] = useState(false);
  const [canvasData, setCanvasData] = useState("");

  useEffect(() => {
    if (lastMessage !== null) {
      const jsonStr = JSON.stringify(lastMessage);
      if (jsonStr !== localLastMessage) setLocalLastMessage(jsonStr);
      if (lastMessage.isTrusted) {
        fetchCanvas();
      }
    }
  }, [lastMessage, localLastMessage]);

  const fetchCanvas = async () => {
    try {
      const response = await fetch(`${BASE_URL}/canvas`);
      const json = await response.json();
      setCanvasData(json.canvas);
    } catch (error: any) {
      toast.error(error.toString());
    }
  };

  useEffect(() => {
    fetchCanvas();
  }, []);

  const [pixels, setPixels] = useState(DEFAULT_CANVAS);
  const [colorSelected, setColorSelected] = useState(0);

  const getCanvas = useCallback(() => {
    if (canvasData !== "") {
      return getCanvasPixels(canvasData);
    }
    return DEFAULT_CANVAS;
  }, [canvasData]);

  useEffect(() => {
    setPixels(getCanvas());
  }, [getCanvas]);

  return (
    <Flex direction="column" width="100%" justifyContent="normal">
      <Title />
      <Flex direction="row">
        <ColorSelector
          colorSelected={colorSelected}
          setColorSelected={setColorSelected}
        />
        <Flex
          mt={5}
          ml="auto"
          mr="auto"
          justifyContent="center"
          direction="column"
        >
          <Flex
            onMouseLeave={() => setMouseHeld(false)}
            onMouseUp={() => setMouseHeld(false)}
            onMouseDown={() => setMouseHeld(true)}
            border="1px solid grey"
            width="1002px"
            height="1002px"
            flexWrap="wrap"
            margin={0}
          >
            {pixels.map((colorCode: number, index: number) => (
              <Pixel
                mouseHeld={mouseHeld}
                colorSelected={colorSelected}
                key={index}
                index={index}
                defaultBg={colorCode}
              ></Pixel>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Canvas;
