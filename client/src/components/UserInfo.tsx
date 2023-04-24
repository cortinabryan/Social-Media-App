import React from "react";
import { Box } from "@mui/material/";

const UserInfo = () => {
  return (
    <Box
      component="span"
      sx={{
        backgroundColor: "primary.main",
        color: "secondary.main",
        padding: "1rem",
        "&:hover": {
          backgroundColor: "myCustomColor.superDark",
        },
      }}
    >
      User Info Section, Left side brah
    </Box>
  );
};

export default UserInfo;
