import React from "react";
import Avatar from "./project1/Avatar";
import Bio from "./project1/Bio";
import SkillList from "./project1/Skilllist";
import skills from "./project1/skills";

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Bio />

        <div className="skill-list">
          {skills.map((skill) => (
            <SkillList
              key={skill.id}
              skill={skill.skill}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
