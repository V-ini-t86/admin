import React from "react";
import "./ListItem.css";
function ListItem({ id, name, email, role }) {
  return (
    <div className="item">
      <input type="checkbox" />
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>{role}</h4>
      <h4>Actions</h4>
    </div>
  );
}
export default ListItem;
