"use client";
import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>;
};

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
          <SearchButton otherClasses={"sm:hidden"} />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
