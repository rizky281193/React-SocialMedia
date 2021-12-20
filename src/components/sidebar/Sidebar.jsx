import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListSubheader } from "@material-ui/core";

export default function Sidebar() {
  const [user, setUser] = useState([])
  const baseURL = 'https://jsonplaceholder.typicode.com'

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${baseURL}/users`)
      setUser(res.data)
    }
    fetchUser()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarFriendList">
          <ListSubheader component="div" id="nested-list-subheader">
            List User
          </ListSubheader>
          {user.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
