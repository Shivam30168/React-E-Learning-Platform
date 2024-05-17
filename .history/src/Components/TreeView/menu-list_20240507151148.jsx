import { useState } from "react";
import MenuItem from "./menu-item";
import './style.css';


export default function MenuList({list=[]}){
    const[visible,setVisible]=useState(false);

    function toggleVisiblity(){
        setVisible(true)
    }

return  <ul className="menu-list-container">
   <button className="btn-forclose" style={{color:"white"}}>✖</button> 
{
    list && list.length?
    list.map((listItem)=><MenuItem item={listItem}/>)
    :null
    
}
</ul>

}