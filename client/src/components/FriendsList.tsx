import React from "react";
import { Box } from "@mui/material/";

const FriendsList = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          height: "100px",
          // width: "100px",
          border: "5px solid black",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        Friend's List, Right side
      </Box>
    </>
  );
};

export default FriendsList;
