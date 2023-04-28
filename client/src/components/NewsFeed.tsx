import React from "react";
import { Box } from "@mui/material/";

const NewsFeed = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          height: "100px",
          // width: "60rem",
          border: "5px solid black",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        News Feed
      </Box>
    </>
  );
};

export default NewsFeed;
