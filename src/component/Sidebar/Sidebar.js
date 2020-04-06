import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/Inbox';

import "./Sidebar.css";

import ProfPic from "../../image/profile_picture.jpg";

const Sidebar = () => {
  const items = [
    { name: "about", label: "About" },
    { name: "project", label: "Project" },
    { name: "contact", label: "Contact" }
  ];

  return (
    <div className="sidebar">
      <div className="profpic">
        <img src={ProfPic} />
      </div>

      <List component="nav">
        {items.map(({ label, name }) => (
          <ListItem key={name} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>

        ))}
      </List>
    </div>
  );
};

export default Sidebar;
