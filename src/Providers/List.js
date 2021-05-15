import React from "react";
import { useSelector } from "react-redux";
import { MenuItemLink } from "react-admin";
import {
  Tooltip,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
const ListCollapse = (props) => {
  const open = useSelector((state) => state.admin.ui.sidebarOpen);

  return (
    <List component="nav">
      <Tooltip
        title={props.title}
        disableHoverListener={open ? true : false}
        placement="right"
      >
        <ListItem
          button
          onClick={() => {
            props.setState((prevOpen) => !prevOpen);
          }}
        >
          {props.state ? <ExpandLess /> : <ExpandMore />}
          <ListItemText
            primary={open ? props.title : ""}
            style={
              props.state
                ? { margin: "0 16px" }
                : { margin: "0 16px", color: "#6E6E6E" }
            }
          />
        </ListItem>
      </Tooltip>
      <Collapse in={props.state} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.links.map((link, i) => (
            <ListItem
              style={open ? { paddingLeft: 28 } : { paddingLeft: 16 }}
              key={i}
            >
              <MenuItemLink
                to={link.url}
                primaryText={link.text}
                onClick={props.onMenuClick}
                leftIcon={<link.icon />}
                style={{ paddingLeft: 0 }}
                exact
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default ListCollapse;
