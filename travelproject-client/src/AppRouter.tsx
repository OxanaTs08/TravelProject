import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/forgotpassword" element={<ResetPasswordPage />} />
        <Route path="/changepassword/:token" element={<ChangePasswordPage />} />
        <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
