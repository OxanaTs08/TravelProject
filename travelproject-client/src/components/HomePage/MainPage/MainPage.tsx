import { Box, Stack } from "@mui/material";
import MainPicture from "../assets/mainPicture.jpeg";
import IntroductionmainPage from "./IntroductionMainPage";
import SearchSection from "./SearchSection";

const MainPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: 0,
        height: "100vh",
      }}
    >
      {/* BackgroudImage */}
      <Box
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            top: "-100px",
            left: "-150px",
            right: "-150px",
            bottom: "-200px",
            backgroundImage: `url(${MainPicture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          },
        }}
      >
        {/* Our Content */}
        <Stack
          sx={{
            height: "100%",
            display: "flex",
            padding: "100px 100px 0 100px",
            gap: "50px",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <IntroductionmainPage />
          <SearchSection />
        </Stack>
      </Box>
    </Box>
  );
};
export default MainPage;
