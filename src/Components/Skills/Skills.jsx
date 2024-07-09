import { useState } from "react";
import { SKILLS } from "../../utils/Data";
import Skillcard from "./Skillcard/Skillcard";
import "./Skills.css";
import Skillsinfo from "./Skillsinfo/Skillsinfo";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  function handleSelectSkill(skill) {
    setSelectedSkill(skill);
  }

  return (
    <section id="Skills" className="s-container">
      <h5>Technical Proficiency</h5>

      <div className="s-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              iconurl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
          </div>
        
        <div className="s-info">
          {<Skillsinfo 
            heading={selectedSkill.title}
            skill={selectedSkill.skills} 
          />}
        </div>
        
      </div>
    </section>
  );
}

export default Skills;





/*import { useState } from "react"
import { SKILLS } from "../../utils/Data"
import Skillcard from "./Skillcard/Skillcard"
import "./Skills.css"
import Skillsinfo from "./Skillsinfo/Skillsinfo";
function Skills() {
  const  [selectedSkills,setselectedSkills]=useState(SKILLS[0]);
   
  function handleSelectSkills(data){
    setselectedSkills(data) 
  }
  return (
    <section className="s-container">
      <h5>Technical Proficiency</h5>
      <div className="s-content">
        <div className="skills">
          {SKILLS.map((item)=>(
            <Skillcard 
            key={item.title}
            iconurl={item.icon}
            title={item.title}
            isActive={selectedSkills.title===item.title}
            onClick={()=>{
              handleSelectSkills(item)
            }}/>
          ))}
        </div>
        <div className="s-info">
          <Skillsinfo
          heading={selectedSkills.title}
          skills={selectedSkills.skills}
           />
        </div>
      </div>
    </section>
  )
}

export default Skills*/
