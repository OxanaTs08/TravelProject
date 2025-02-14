import { Box, Typography } from "@mui/material";
import Calendar from "../assets/calendar-event.svg";

const SearchSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: "7px",
        padding: "15px 50px",
      }}
    >
      {/* Should decide what exactly searchcrieterias to add in this block */}
      <Typography sx={{ color: "grey" }}> Destination</Typography>
      <Typography sx={{ color: "grey" }}> Popular places to visit</Typography>
      <Typography sx={{ color: "grey" }}> Posts</Typography>
      <Typography sx={{ color: "grey" }}> Events</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <img src={Calendar} alt="Calendar" />
        <Typography sx={{ color: "grey" }}> Date</Typography>
      </Box>
    </Box>
  );
};
export default SearchSection;
