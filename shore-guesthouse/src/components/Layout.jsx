import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
