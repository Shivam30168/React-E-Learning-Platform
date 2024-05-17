import MenuList from "./menu-list";

export default function SideBar({menus=[]}){
    return (
        <SideBar className="tree-view-container">

            <MenuList list={menus}/>
        </SideBar>
    );
}

  