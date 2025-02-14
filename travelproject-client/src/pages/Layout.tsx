import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import GlobalStyle from "../GlobalStyle";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { headerWidth } from "../components/Header";

const Layout = () => {
  // const location = useLocation();

  // const isLoginPage = location.pathname === "/";
  // const isRegistrationPage = location.pathname === "/register";
  // const isResetPasswordPage = location.pathname === "/forgotpassword";
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {/* {!isLoginPage && !isRegistrationPage && !isResetPasswordPage && ( */}
      <Header />
      {/* )} */}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
