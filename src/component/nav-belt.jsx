import React from "react";
import { useState } from "react";
import Menu from "./menuApi";

function filterData(searchText, menuData) {
  return menuData.filter((curElem) =>
    curElem.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

function SearchBox({ setRestaurantList, menuList }) {
  const [searchText, setSearchText] = useState("");

  const filterItems = (category) => {
    if (category === "All") {
      setRestaurantList(Menu);
    } else {
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
      setRestaurantList(updatedList);
    }
  };

  return (
    <>
      <div className="search-category-container">
        <div className="search-btn">
          <input
            type="text"
            placeholder="search..."
            className="search-Input-btn"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-Input-btn"
            id="search-btn"
            onClick={() => {
              const filterDatas = filterData(searchText, Menu);
              console.log(filterDatas);
              setRestaurantList(filterDatas);
            }}
          >
            Search
          </button>
        </div>

        <div className="categories-btn">
          <label htmlFor="categories">Category </label>
          <select
            name="categories"
            id="categories"
            onChange={(e) => filterItems(e.target.value)}
          >
            {menuList.map((curElem, index) => {
              return (
                <option key={index} value={curElem}>
                  {curElem}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
