import { useState } from "react";
import Card from "./menuCard";
import Menu from "../component/menuApi"
import SearchBox from "./nav-belt";

const uniqueList = [...new Set(Menu.map((curElem)=>{
  return curElem.category;
})
),"All",]


function Resturant() { 
  const [resturants, setRestaurantList] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)

  return (
    <>
      <SearchBox  setRestaurantList ={setRestaurantList} menuList = {menuList}/>
          
      <div className="card-list">

        {
          resturants.map((resturant)=>{
            return <Card {...resturant} key={resturant.id} />
          })
        }
      </div>
    </>
  );
}

export default Resturant
