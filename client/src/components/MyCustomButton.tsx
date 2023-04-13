import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const MyCustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(10),
}));

export default MyCustomButton;
