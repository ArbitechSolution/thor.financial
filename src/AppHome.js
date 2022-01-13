import React from "react";
import Navbar from "./component/navbar/Navbar";
import Menu from "./component/menu/Menu";
import MenuDown from "./component/MenuDown/MenuDown";
import Footer from "./component/Footer/Footer";
function AppHome() {
  return (
    <div>
      <Navbar />
      <Menu />
      <MenuDown />
      <Footer />
    </div>
  );
}

export default AppHome;
