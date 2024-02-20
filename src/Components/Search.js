import React, { useContext } from "react";

import MainContext from "./MainContext";

import { GrSearch } from "react-icons/gr";

export default function Search() {
  const { setSearch } = useContext(MainContext);

  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Brands"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
