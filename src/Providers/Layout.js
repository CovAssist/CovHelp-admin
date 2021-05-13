import * as React from "react";
import { useSelector } from "react-redux";
import { MenuItemLink, Layout } from "react-admin";
import {
  useMediaQuery,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import {
  Person,
  LocalGasStation,
  LocalHospital,
  Hotel,
  ExpandLess,
  ExpandMore,
  CheckCircle,
  PeopleAltOutlined,
  PersonAdd,
  GetApp,
} from "@material-ui/icons";

const Menu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  const [openVolunteerData, setOpenVolunteerData] = React.useState(false);
  return (
    <div>
      <br />
      <List component="nav">
        <Tooltip
          title="Volunteer Data"
          disableHoverListener={open ? true : false}
          placement="right"
        >
          <ListItem
            button
            onClick={() => {
              setOpenVolunteerData((prevOpen) => !prevOpen);
            }}
          >
            {openVolunteerData ? <ExpandLess /> : <ExpandMore />}
            <ListItemText
              primary={open ? "Volunteer Data" : ""}
              style={
                openVolunteerData
                  ? { margin: "0 16px" }
                  : { margin: "0 16px", color: "#6E6E6E" }
              }
            />
          </ListItem>
        </Tooltip>
        <Collapse in={openVolunteerData} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem style={open ? { paddingLeft: 28 } : { paddingLeft: 16 }}>
              <MenuItemLink
                to="/volunteers/verified"
                primaryText="Volunteers"
                onClick={onMenuClick}
                leftIcon={<Person />}
                style={{ paddingLeft: 0 }}
                exact
              />
            </ListItem>
            <ListItem style={open ? { paddingLeft: 28 } : { paddingLeft: 16 }}>
              <MenuItemLink
                to="/volunteers/unverified"
                primaryText="Volunteer Regitrations"
                onClick={onMenuClick}
                leftIcon={<PersonAdd />}
                style={{ paddingLeft: 0 }}
                exact
              />
            </ListItem>
            <ListItem style={open ? { paddingLeft: 28 } : { paddingLeft: 16 }}>
              <MenuItemLink
                to="/volunteers/past"
                primaryText={"Past Volunteers"}
                onClick={onMenuClick}
                leftIcon={<PeopleAltOutlined />}
                style={{ paddingLeft: 0 }}
                exact
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
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
