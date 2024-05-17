import { useParams } from "react-router-dom";
// import Angular from "./Angular";
import React from "react";

//lazy import (dynamic import)
// const AngularComponent = React.lazy(() => import('./Angular'));
const SubjectCard = () => 
{
  const param=useParams();
  return (
    <div>
          <h1 id="myhead" style={{backgroundColor:"aqua"}}>
            Inside {param.subject} {param.name}Details
            </h1>
            
    </div>
  )
}

export default SubjectCard