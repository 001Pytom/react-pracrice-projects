function SkillList(props) {
  const skillColor = { backgroundColor: props.color };

  return (
    <div className="skill" style={skillColor}>
      <p>{props.skill}</p>
      <span>{props.icon}</span>
    </div>
  );
}

export default SkillList;
