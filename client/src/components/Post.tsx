import React from "react";
import { Box } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";

const Post = () => {
  return (
    <>
      {" "}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          height: "100px",
          display: "flex",
          border: "5px solid black",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Avatar alt="Izzy" src="/static/images/avatar/2.jpg" />
        <Paper variant="outlined" elevation={12} />
        Whats on your mind?
      </Box>
    </>
  );
};

export default Post;
