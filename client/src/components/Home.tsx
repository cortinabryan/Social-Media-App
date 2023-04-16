import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { orange } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Grid container spacing={3} color={orange[500]}>
        <Grid xs={2}>
          <Item>User Info Section, Left side</Item>
        </Grid>
        <Grid xs={8}>
          <Item>News Feed?</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Friend's List, right side</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
