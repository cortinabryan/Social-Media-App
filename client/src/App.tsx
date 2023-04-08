import React from "react";
import Navbar from "./components/Navbar";
import { Button, Typography } from "@mui/material";

// const App: React.FC = () => {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Typography variant="myVariant">THIS IS TYPOGRAPHYYYY!!!!</Typography>
      <Button variant="contained">HAKUNA W/ MATATA</Button>
      <Button sx={{ p: 3, m: 3 }} color="secondary" variant="outlined">
        HAKUNA W/O MATATA
      </Button>
    </div>
  );
};

export default App;
