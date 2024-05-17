import MenuItem from "./menu-item";
import './style.css';
import CloseButton from 'react-bootstrap/CloseButton';

export default function MenuList({list=[]}){

return  <ul className="menu-list-container">
    
{
    list && list.length?
    list.map((listItem)=><MenuItem item={listItem}/>)
    :null
}<CloseButton />
</ul>

}