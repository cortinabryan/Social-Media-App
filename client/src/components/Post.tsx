import React from "react";
import { Box, Container, Divider } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import { Typography, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
// import Divider from "@mui/material/Divider";

const Post = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          minHeight: "10rem",
          display: "flex",
          flexDirection: "column",
          border: "5px solid black",
          // justifyContent: "",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Box
          id="post-top-row"
          sx={{ display: "inherit", flexDirection: "row" }}
        >
          <Avatar
            alt="Izzy"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <Box
            sx={{
              bgcolor: "#2D2D2D",
              width: "70rem",
              height: "4rem",
              mx: "1rem",
              borderRadius: "5rem",
              display: "inherit",
            }}
          >
            <TextField
              fullWidth
              label="Whats on your mind?"
              id="fullWidth"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{ ml: "1.5rem" }}
            />
          </Box>
        </Box>
        <Divider
          variant="middle"
          sx={{
            bgcolor: "green",
            my: "1rem",
          }}
        />
        <Box id="post-bottom-row" sx={{ display: "inherit" }}>
          <ImageIcon sx={{ color: "#fff" }} />
          <Typography variant="subtitle2" sx={{ mt: "2px", mx: "1.5rem" }}>
            Image
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Post;

// <Box
//         sx={{
//           backgroundColor: "primary.main",
//           color: "secondary.main",
//           padding: "1rem",
//           margin: "1rem",
//           height: "100px",
//           display: "flex",
//           border: "5px solid black",
//           "&:hover": {
//             backgroundColor: "myCustomColor.superDark",
//           },
//         }}
//       >
//         <Avatar alt="Izzy" src="/static/images/avatar/2.jpg" />
//         Whats on your mind?
//       </Box>
