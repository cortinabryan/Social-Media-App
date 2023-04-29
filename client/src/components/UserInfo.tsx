import React from "react";
import { Box } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const UserInfo = () => {
  return (
    <>
      <Box
        id="outter"
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          height: "100px",
          // width: "200px",
          border: "5px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        <Box id="inner" sx={{ flexDirection: "row", bgcolor: "red" }}>
          <Box id="top" sx={{ bgcolor: "purple", display: "flex" }}>
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
            <ManageAccountsIcon
              sx={{
                mt: ".5rem",
                ml: "auto",
                mr: ".5rem",
                color: "#fff",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
          <Divider variant="middle" sx={{ bgcolor: "green", height: "2px" }} />
          <Box id="middle" sx={{ display: "flex" }}>
            <LocationOnIcon
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
            <Typography
              variant="subtitle1"
              sx={{ mx: ".5rem", mt: ".5rem", fontSize: "1rem" }}
            >
              Australia
            </Typography>
          </Box>
          <Box id="middle" sx={{ display: "flex" }}>
            <WorkOutlineIcon
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
            <Typography
              variant="subtitle1"
              sx={{ mx: ".5rem", mt: ".5rem", fontSize: "1rem" }}
            >
              UFC
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;

{
  /* <Box
          id="inner"
          sx={{
            backgroundColor: "primary.main",
            color: "secondary.main",
            padding: "1rem",
            margin: "1rem",
            height: "100px",
            // width: "200px",
            border: "5px solid black",
            display: "flex",
            flexDirection: "row",
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
          <Divider variant="middle" sx={{ color: "red" }} />
        </Box> */
}
