import { useState } from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import styles from "./Search.module.css";

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className={styles.search}>
      {isSearchActive && (
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      )}

      <div className={styles.searchIcon} onClick={handleSearchClick}>
        {isSearchActive ? (
          <IoIosClose className={styles.icon} color="#1d2a51" size={30} />
        ) : (
          <IoIosSearch className={styles.icon} color="#1d2a51" size={30} />
        )}
      </div>
    </div>
  );
};

export default Search;
