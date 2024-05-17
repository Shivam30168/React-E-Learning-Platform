import { useState } from "react";
import MenuItem from "./menu-item";
import './style.css';
import TreeView from ".";
import menus from "./data";


export default function MenuList({list=[]}){    

return  <ul className="menu-list-container">
   <button className="btn-forclose" style={{color:"white"}} onClick={{className}=".tree-view-container"}>✖</button>
{
    list && list.length?
    list.map((listItem)=><MenuItem item={listItem}/>)
    :null
    
}
</ul>

}