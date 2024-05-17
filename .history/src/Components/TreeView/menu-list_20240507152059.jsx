import { useState } from "react";
import MenuItem from "./menu-item";
import './style.css';
import TreeView from ".";
import menus from "./data";

export default function MenuList({ list = [] }) {
    const [visible, setVisible] = useState(false);

    function toggleVisibility() {
        setVisible(!visible); // Toggle visibility state
    }

    return (
        <ul className="menu-list-container">
            {visible && (
                <button className="btn-forclose" style={{ color: "white" }} onClick={toggleVisibility}>✖</button>
            )}
            {visible ? <TreeView menus={menus} /> : "no data"}
            {list && list.length ?
                list.map((listItem) => <MenuItem item={listItem} />)
                : null
            }
        </ul>
    );
}
