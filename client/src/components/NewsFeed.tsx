import React from "react";
import { Box, Container, Avatar } from "@mui/material/";
import { Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
          display: "flex",
          flexDirection: "column",
          // width: "60rem",
          border: "3px solid black",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Box
          id="newsfeed-top"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt="Izzy"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <Box id="newsfeed-info" sx={{ bgcolor: "purple" }}>
            <Typography variant="h6" sx={{ ml: ".5rem", fontSize: "1rem" }}>
              Henry Cejudo
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ ml: ".5rem", fontSize: ".7rem", color: "grey" }}
            >
              Los Angeles, CA
            </Typography>
          </Box>
          <PersonAddIcon
            sx={{
              ml: "auto",
              mr: "2rem",
              color: "green",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default NewsFeed;
