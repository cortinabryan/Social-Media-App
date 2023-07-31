import React from "react";
import Navbar from "./scenes/navbar/Navbar";
import Home from "./scenes/homePage/Home";
import Test from "./components/Test";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MyCustomButton from "./components/MyCustomButton";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/loginPage/index";

// const App: React.FC = () => {
//   return <div className="App"></div>;
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      {/* <Home />
      <Test /> */}
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
