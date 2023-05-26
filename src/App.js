import { Container } from "@mui/material";
import React from "react";
import { withTheme } from "./theme";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Home />
    </Container>
  );
};

const hocs = [withTheme];

const wrappedApp = hocs.reduce((app, wrapper) => wrapper(app), App);

export default wrappedApp;
