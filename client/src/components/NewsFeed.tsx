import React from "react";
import { Box, Container } from "@mui/material/";

const NewsFeed = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          mt: "2rem",
          minHeight: "30rem",
          // width: "60rem",
          border: "5px solid black",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        News Feed
      </Container>
    </>
  );
};

export default NewsFeed;
