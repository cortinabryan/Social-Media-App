import React from "react";
import { Box } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

const UserInfo = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          height: "100px",
          // width: "200px",
          border: "5px solid black",
          display: "flex",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Avatar alt="Mr.Guy" src="/static/images/avatar/2.jpg" />
        {/* <h3>Israel Adesanya</h3> */}
        <Typography
          variant="h6"
          sx={{
            ml: ".5rem",
          }}
        >
          Israel Adesanya
        </Typography>
      </Box>
    </>
  );
};

export default UserInfo;
