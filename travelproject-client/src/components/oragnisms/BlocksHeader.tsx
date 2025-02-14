import { Box, Typography } from "@mui/material";
import SmallButton from "./SmallButton";
import { SxProps } from "@mui/material";
const BlocksHeader = ({
  title,
  buttonPath,
  sx = {},
  buttonTitle,
}: {
  title: string;
  buttonPath: string;
  sx?: SxProps;
  buttonTitle: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <SmallButton buttonPath={buttonPath} sx={sx} buttonTitle={buttonTitle} />
    </Box>
  );
};
export default BlocksHeader;
