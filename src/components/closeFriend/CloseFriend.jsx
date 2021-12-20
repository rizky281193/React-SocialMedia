import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Business, ContactPhone, Email, ExpandLess, ExpandMore, Home, Person } from "@material-ui/icons";
import { useState } from "react";


export default function CloseFriend({ user }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={user.username} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={user.name} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={user.email} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={`${user.address.street} - ${user.address.suite}, ${user.address.city}`} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactPhone />
            </ListItemIcon>
            <ListItemText primary={user.phone} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary={`${user.company.name} - ${user.company.catchPhrase}, ${user.company.bs}`} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
