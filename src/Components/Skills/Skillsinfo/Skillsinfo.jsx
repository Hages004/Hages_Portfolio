import React from "react"
import "./Skillsinfo.css"
function Skillsinfo({skill,heading}) {
  return (
    <div className="si-container">
      <h6>{heading}</h6>
      <div className="si-content">
        <div>{skill.map((item,index)=>(
          <React.Fragment key={`skill_${index}`}>
              <div className="skill-info">
            <p>{item.skill}</p>
            <p className="Percentage">{item.Percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress" style={{width:item.Percentage}}/>
              </div>
          </React.Fragment>
          
        )) }</div>
      </div>
      
    </div>
  )
}

export default Skillsinfo



/*import React from "react"
import "./Skillsinfo.css"

function Skillsinfo({heading,skills}) {
  return (
    <div className="si-container">
      <h6>{heading}</h6>
      <div className="si-content">
        {skills.map((item,index)=>(
              <React.Fragment key={`skill_${index}`}>
              <div className="skill-info">
                <p>{item.skill}</p>
              <p className="Percentage">{item.Percentage}</p>
              </div>
              <div className="skill-progress-bg">
              <div className="skill-progress" style={{width:item.Percentage}}/>
              </div>
              </React.Fragment>
          ))}
      </div>
    </div>
  )
}

export default Skillsinfo*/
