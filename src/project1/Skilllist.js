function SkillList({ skillObj }) {
  const skillColor = { backgroundColor: skillObj.color };

  return (
    <div className="skill" style={skillColor}>
      <p>{skillObj.skill}</p>
      <span>
        {skillObj.level === "beginner" && "👧"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default SkillList;
