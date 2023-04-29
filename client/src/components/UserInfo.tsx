import React from "react";
import { Box } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

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
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Box id="Left" sx={{ display: "inherit" }}>
          <Avatar alt="Mr.Guy" src="/static/images/avatar/2.jpg" />
          <Typography
            variant="h6"
            sx={{
              mx: ".5rem",
              mt: ".5rem",
              fontSize: "1rem",
              // verticalAlign: "super",
              // allignSelf: "center",
            }}
          >
            Israel Adesanya
          </Typography>
        </Box>
        <Box id="Right">
          <ManageAccountsIcon
            sx={{
              mt: ".5rem",
              ml: ".5rem",
              color: "#fff",
              justifySelf: "end",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
