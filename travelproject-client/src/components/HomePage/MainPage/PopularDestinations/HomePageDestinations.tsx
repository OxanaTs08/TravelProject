import { Box, Grid } from "@mui/material";
import BlocksHeader from "../../../oragnisms/BlocksHeader";
// import DestinationCard from "./DestinationCard";

const HomePageDestinations = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <BlocksHeader
        title="Destinations"
        buttonTitle="View All"
        buttonPath="/destinations"
      />
      <Grid container spacing={2} justifyContent="center">
        {/* {destinations &&
          destinations.slice(0, 4).map((destination) => (
            <Grid item xs={12} sm={6} md={3} key={destination.id}>
              <DestinationCard category={destination} />
            </Grid>
          ))} */}
      </Grid>
    </Box>
  );
};
export default HomePageDestinations;
