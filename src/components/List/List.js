import React from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem";
function List() {
  return (
    <div className="list">
      <div className="list-heading">
        <input type="checkbox" />
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Role</h4>
        <h4>Actions</h4>
      </div>
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
      <ListItem id="1" name="Vinit" email="vint.2345@gmail.com" role="gamer" />
    </div>
  );
}

export default List;
