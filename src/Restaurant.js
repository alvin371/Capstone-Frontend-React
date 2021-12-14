import React, {useState} from 'react';
import App from "./App";
import menuList from "./menuList"
import Breakfast from "./Breakfast";


const uniqueList = () => [... new Set (
  menuList.map((curElem) =>
  {
    return curElem.category;
  })
), "All", ]


console.log(uniqueList);

const Restaurant = () =>
{
  const [menuData, setMenuData] = useState(menuList);
  const [data, setData] = useState(uniqueList);

  const filterItem = (category) =>
  {
    if(category === "All")
    {
      setMenuData(menuList);
      return;
    }
    const updatedList = menuList.filter((curElement) =>
    {
      return curElement.category === category;
    });
    setMenuData(updatedList);
  }
  return (
    <div className="container-fluid">
        <App filterItem={filterItem} data={data} />
        <Breakfast menuData={menuData}/>
        
      </div>
 )
}
export default Restaurant;
