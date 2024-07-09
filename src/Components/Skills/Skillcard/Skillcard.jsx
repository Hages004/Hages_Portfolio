import "./Skillcard.css";

function Skillcard({ iconurl, title, isActive, onClick }) {
  return (
    <div className={`s-card ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="s-icon">
        <img src={iconurl} alt={title} />
      </div>
      <span className="title">{title}</span>
    </div>
  );
}

export default Skillcard;

/*import "./Skillcard.css"
import React from "react"
function Skillcard( {title,iconurl,isActive,onClick}) {
  return (
    <div className={`s-card ${isActive?"active":""}`} onClick={()=>onClick()}>
      <div className="s-icon">
        <img  src={iconurl} alt={title} />
      </div>
      <span className="title">{title}</span>
    </div>
  )
}

export default Skillcard*/
