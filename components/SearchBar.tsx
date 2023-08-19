"use client";
import { useState } from "react";
import { SearchManufacturer } from ".";

function SearchBar() {
  const handleSearch = () => {};

  const [manufacturer, setMenufacturer] = useState("");
  return (
    <>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setMenufacturer={setMenufacturer}
          />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
