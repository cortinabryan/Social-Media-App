import React from "react";
import { Box, Container } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const UserInfo = () => {
  return (
    <>
      <Container
        id="outter"
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "1rem",
          margin: "1rem",
          // height: "100px",
          // width: "200px",
          border: "3px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: "myCustomColor.superDark",
          },
        }}
      >
        {/* <Box id="inner" sx={{ flexDirection: "row", bgcolor: "red" }}> */}
        <Box id="inner" sx={{ flexDirection: "row" }}>
          <Box id="top" sx={{ display: "flex" }}>
            <Avatar
              alt="Izzy"
              src="images/stylebender-headshot.jpg"
              sx={{ width: 60, height: 60 }}
            />
            <Typography
              variant="h6"
              sx={{
                mx: "1rem",
                mt: ".5rem",
                fontSize: "1.2rem",
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
          <Divider variant="middle" sx={{ bgcolor: "green", my: ".5rem" }} />
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
              variant="h6"
              sx={{ mx: ".5rem", mt: ".5rem", fontSize: "1rem" }}
            >
              Australia
            </Typography>
          </Box>
          <Box id="middle2" sx={{ display: "flex" }}>
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
              variant="h6"
              sx={{ mx: ".5rem", mt: ".5rem", fontSize: "1rem" }}
            >
              UFC
            </Typography>
          </Box>
          <Divider variant="middle" sx={{ bgcolor: "green", my: ".5rem" }} />
          <Box id="middle" sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "inherit", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                sx={{ mx: ".5rem", mt: ".5rem", fontSize: ".8rem" }}
              >
                Who viewed your profile
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mx: ".5rem",
                  mt: ".5rem",
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                4628
              </Typography>
            </Box>
            <Box sx={{ display: "inherit", justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                sx={{ mx: ".5rem", mt: ".5rem", fontSize: ".8rem" }}
              >
                Impressions of your post
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mx: ".5rem",
                  mt: ".5rem",
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                8920
              </Typography>
            </Box>
          </Box>
          <Divider variant="middle" sx={{ bgcolor: "green", my: ".5rem" }} />
          <Box id="Socials">
            <Typography
              variant="h5"
              sx={{ mx: ".5rem", my: ".5rem", fontSize: "1.2rem" }}
            >
              Social Profiles
            </Typography>
            <Box
              id="twitter"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "inherit" }}>
                <TwitterIcon
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <Box id="twitter-inner">
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ".8rem", mx: ".8rem" }}
                  >
                    Twitter
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ".7rem", mx: ".8rem", color: "grey" }}
                  >
                    Social Network
                  </Typography>
                </Box>
              </Box>
              <EditIcon
                sx={{
                  color: "#fff",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
            <Box
              id="linkedin"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "inherit" }}>
                <LinkedInIcon
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <Box id="linkedin-inner">
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ".8rem", mx: ".8rem" }}
                  >
                    LinkedIn
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ".7rem", mx: ".8rem", color: "grey" }}
                  >
                    Network Platform
                  </Typography>
                </Box>
              </Box>
              <EditIcon
                sx={{
                  color: "#fff",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
            <Box
              id="facebook"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "inherit" }}>
                <FacebookIcon
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <Box id="facebook-inner">
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ".8rem", mx: ".8rem" }}
                  >
                    Facebook
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ".7rem", mx: ".8rem", color: "grey" }}
                  >
                    Social Network
                  </Typography>
                </Box>
              </Box>
              <EditIcon
                sx={{
                  color: "#fff",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
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
