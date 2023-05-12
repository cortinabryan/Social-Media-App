import React from "react";
import { Box, Container, Avatar } from "@mui/material/";
import { Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const PostDJ = () => {
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
          borderRadius: "1rem",
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
            alt="DJ"
            src="/images/DJ-headshot.jpg"
            sx={{ width: 60, height: 60, ":hover": { cursor: "pointer" } }}
          />
          <Box id="newsfeed-info" sx={{ mx: ".5rem", my: ".5rem" }}>
            <Typography
              variant="h6"
              sx={{
                ml: ".5rem",
                fontSize: "1rem",
                color: "white",
                ":hover": { cursor: "pointer", color: "secondary.main" },
              }}
            >
              Demetrious Johnson
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ ml: ".5rem", fontSize: ".7rem", color: "grey" }}
            >
              Madisonville, KY
            </Typography>
          </Box>
          <PersonAddIcon
            sx={{
              ml: "auto",
              mr: "2rem",
              mt: ".5rem",
              color: "teal",
              borderRadius: "1rem",
              "&:hover": {
                bgcolor: "white",
                cursor: "pointer",
              },
            }}
          />
        </Box>
        <Box
          id="newsfeed-bottom"
          sx={{ display: "flex", my: ".5rem", flexDirection: "column" }}
        >
          <Typography variant="subtitle1" sx={{ my: ".5rem" }}>
            I'm the type of fighter who has never made an excuse. I fought with
            a broken rib, broken leg.
          </Typography>
          <img
            src="images/demetrious-johnson.jpg"
            alt=""
            className="image-newsfeed"
          />
        </Box>
      </Container>
    </>
  );
};

export default PostDJ;
