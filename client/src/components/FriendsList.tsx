import React from "react";
import { Box, Container, Avatar, Typography } from "@mui/material/";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

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
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: "1rem" }}>
          Friends List
        </Typography>
        <Box
          id="friends-list-inner"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            id="aljo-box"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: ".5rem",
            }}
          >
            <Avatar
              alt="aljamain"
              src="/images/aljo-headshot.jpg"
              sx={{ width: 60, height: 60 }}
            />
            <Box id="aljo-typography" sx={{ mx: ".5rem", my: ".5rem" }}>
              <Typography
                variant="h6"
                sx={{
                  ml: ".5rem",
                  fontSize: "1rem",
                  color: "white",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                Aljamain Sterling
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ ml: ".5rem", fontSize: ".7rem", color: "grey" }}
              >
                Uniondale, NY
              </Typography>
            </Box>
            <PersonRemoveIcon
              sx={{
                ml: "auto",
                mt: ".5rem",
                color: "green",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
          <Box
            id="merab-box"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: ".5rem",
            }}
          >
            <Avatar
              alt="merab"
              src="/images/merab-headshot.jpg"
              sx={{ width: 60, height: 60 }}
            />
            <Box id="merab-typography" sx={{ mx: ".5rem", my: ".5rem" }}>
              <Typography
                variant="h6"
                sx={{
                  ml: ".5rem",
                  fontSize: "1rem",
                  color: "white",
                  ":hover": { color: "secondary.main" },
                }}
              >
                Merab Dvalishvili
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ ml: ".5rem", fontSize: ".7rem", color: "grey" }}
              >
                Tbilisi, Georgia
              </Typography>
            </Box>
            <PersonRemoveIcon
              sx={{
                ml: "auto",
                mt: ".5rem",
                color: "green",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FriendsList;
