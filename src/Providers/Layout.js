import * as React from "react";
import { useSelector } from "react-redux";
import { MenuItemLink, Layout } from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import {
  Person,
  LocalGasStation,
  LocalHospital,
  Hotel,
} from "@material-ui/icons";

const Menu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  return (
    <div>
      <br />
      <MenuItemLink
        to="/volunteers/verified"
        primaryText="Volunteers"
        leftIcon={<Person fontSize="large" />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        exact
      />
      <MenuItemLink
        to="/oxygen/verified"
        primaryText="Verified Oxygen"
        leftIcon={<LocalGasStation fontSize="large" />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        exact
      />
      <MenuItemLink
        to="/medicine/verfied"
        primaryText="Verified Medicine"
        leftIcon={<LocalHospital fontSize="large" />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        exact
      />

      <MenuItemLink
        to="/beds/verified"
        primaryText="Verified Vacant Beds"
        leftIcon={<Hotel fontSize="large" />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        exact
      />
      {isXSmall && logout}
    </div>
  );
};

const CustomLayout = (props) => <Layout {...props} menu={Menu} />;

export default CustomLayout;
