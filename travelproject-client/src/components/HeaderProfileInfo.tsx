import { Box, Avatar, Typography } from "@mui/material";
import person from "../assets/person.svg";
const HeaderProfileInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        alignItems: "center",
      }}
    >
      {/* default , on a complete page User will see own name */}
      <Typography sx={{ color: "grey" }}>Hello, Name! </Typography>
      <Avatar>
        {/* default , on a complete page User will see own picture if it was auploaded */}
        <img src={person} alt="Avatar" />
      </Avatar>
    </Box>
  );
};
export default HeaderProfileInfo;
