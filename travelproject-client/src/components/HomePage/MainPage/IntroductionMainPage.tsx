import { Typography, Stack } from "@mui/material";

const IntroductionmainPage = () => {
  return (
    <Stack
      sx={{
        height: "50px",
        padding: "17px 18px",
        alignItems: "center",
        gap: "38px",
      }}
    >
      <Typography sx={{ color: "white", fontSize: "24px" }}>
        {" "}
        Discover the most engaging places
      </Typography>
    </Stack>
  );
};
export default IntroductionmainPage;
