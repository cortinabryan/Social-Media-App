import React from "react";
import { Box, Container } from "@mui/material/";

const FriendsList = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          minHeight: "10rem",
          // width: "100px",
          border: "3px solid black",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        Friend's List, Right side
      </Container>
    </>
  );
};

export default FriendsList;
