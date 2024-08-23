import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import ContactUs from "../../pages/contact_us/ContactUs";
import Profile from "../../pages/profile/Profile";
import Help from "../../pages/help/Help";
import AboutUs from "../../pages/about_us/AboutUs";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contuct_us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </main>
  );
};
export default Main;
