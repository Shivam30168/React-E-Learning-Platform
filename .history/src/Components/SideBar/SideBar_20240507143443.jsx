import MenuList from "./side-list";

export default function SideBar({menus=[]}){
    return (
        <SideBar className="tree-view-container">

            <MenuList list={menus}/>
        </SideBar>
    );
}

  