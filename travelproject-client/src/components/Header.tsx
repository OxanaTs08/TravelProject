import { Toolbar, AppBar, Typography, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store"; //  Imorting UserState (loggedin or not)
// import { NavLink } from "react-router-dom";
// import MainButton from "../components/MainButton";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { resetState } from "../redux/userSlice";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import Notifications from "../components/Notifications";
// import Search from "./ Search";
import HeaderProfileInfo from "./HeaderProfileInfo";
import Logo from "../assets/logo.svg";

export const headerWidth = 245;

const menuItems = [
  {
    path: "/posts",
    name: "Home",
  },
  {
    path: "/posts",
    name: "Search",
  },
  {
    path: "/explore",
    name: "Explore",
  },
  {
    path: "/chatpage",
    name: "Messages",
  },
  {
    path: "/posts",
    name: "Notifications",
  },
  {
    path: "/create",
    name: "Create Post",
  },
];

const Header = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const currentUser = useSelector((state: RootState) => state.user.currentUser);

  //  temporary before making pages complete
  const currentUser = true;

  // const handleLogOut = () => {
  //   localStorage.removeItem("token");
  //   dispatch(resetState());
  //   navigate("/");
  // };

  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [drawerContent, setDrawerContent] = useState<
  //   "search" | "notifications" | null
  // >(null);

  // const toggleDrawer =
  //   (open: boolean, content: "search" | "notifications" | null = null) =>
  //   () => {
  //     setIsDrawerOpen(open);
  //     setDrawerContent(content);
  //   };

  return (
    <>
      <AppBar
        sx={{
          position: "static",
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "none",
          height: "70px",
          marginTop: "30px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <img src={Logo} alt="Logo" />
          </Box>

          {/* MenuItems */}

          <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
            {menuItems.map((item) => (
              <ScrollLink to={item.path} smooth={true} duration={500}>
                <Typography
                  component="span"
                  sx={{
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": { color: "white", textDecoration: "none" },
                  }}
                >
                  {item.name}
                </Typography>
              </ScrollLink>
            ))}
          </Box>
          {/* LoginArea/ProfileArea */}
          <Box>
            {currentUser ? (
              <HeaderProfileInfo />
            ) : (
              <Typography>LogIn</Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
