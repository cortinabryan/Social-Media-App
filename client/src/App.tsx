import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test from "./components/Test";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MyCustomButton from "./components/MyCustomButton";

// const App: React.FC = () => {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Test />
      {/* <Typography variant="myVariant">THIS IS TYPOGRAPHYYYY!!!!</Typography>
      <Typography variant="myVariant" sx={{ color: "myCustomColor2.main" }}>
        IM TRYING TO SEE THE DIFFERENCE
      </Typography>
      <MyCustomButton variant="contained">HAKUNA MATATA</MyCustomButton>
      <MyCustomButton sx={{ p: 3, m: 3 }} color="secondary" variant="outlined">
        ALOTTA MATATA
      </MyCustomButton> */}
    </div>
  );
};

export default App;
