import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Box>
      <ToastContainer />
    </ChakraProvider>
  );
};
