import React from "react";
import Footer from "./component/Footer/Footer";
import JoinCommunity from "./ComponentTwo/JoinCommunity/JoinCommunity";
import MenuOne from "./ComponentTwo/menuone/MenuOne";
import MenuOneDown from "./ComponentTwo/MenuOneDown/MenuOneDown";
import NavbarTwo from "./ComponentTwo/Navbartwo/NavbarTwo";
import FooterTwo from "./ComponentTwo/FooterTwo/FooterTwo";
import MyNodes from "./ComponentTwo/MyNodes/MyNodes";
function AppLaunch() {
  return (
    <div id="launchapp">
      <NavbarTwo />
      <MenuOne />
      <MenuOneDown />
      <MyNodes/>
      <JoinCommunity />
      <FooterTwo />
    </div>
  );
}

export default AppLaunch;
