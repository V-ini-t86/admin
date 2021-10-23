import React from "react";
import "./SearchBar.css";
function SearchBar() {
  return (
    <input
      className="search"
      placeholder="Search by Name,Email or Name"
      type="text"
    />
  );
}

export default SearchBar;
