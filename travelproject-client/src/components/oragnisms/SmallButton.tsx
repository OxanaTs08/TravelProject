import { Button, styled } from "@mui/material";
import { SxProps } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "rgba(246, 244, 255, 1)",
  color: "rgba(123, 97, 255, 1)",
  borderRadius: "8px",
  padding: "8px 16px",
  maxWidth: "max-content",
  textTransform: "none",
  "&:hover": {
    boxShadow: "none",
    borderColor: "rgba(139, 139, 139, 1)",
    color: "rgba(139, 139, 139, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  "&:active": {
    transform: "translateY(2px)",
  },
}));
const SmallButton = ({
  buttonTitle,
  buttonPath,
  sx = {},
}: {
  buttonTitle: string;
  buttonPath: string;
  sx?: SxProps;
}) => {
  return (
    <Link to={buttonPath}>
      <StyledButton variant="contained" sx={sx}>
        {buttonTitle}
      </StyledButton>
    </Link>
  );
};
export default SmallButton;
