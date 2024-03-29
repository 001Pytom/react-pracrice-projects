import React, { useState } from "react";
// import Avatar from "./project1/Avatar";
// import Bio from "./project1/Bio";
// import SkillList from "./project1/Skilllist";
// import skills from "./project1/skills";

// function App() {
//   return (
//     <div className="card">
//       <Avatar />

//       <div className="data">
//         <Bio />

//         <div className="skill-list">
//           {skills.map((skill) => (
//             <SkillList key={skill.id} skillObj={skill} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// project2 date counter
// import Counter from "./project2/Counter";
// function App() {
//   return <Counter />;
// }

// exercise Flashcards
import "./styles.css";
import FlashCards from "./exercise/Flashcrads";
import questions from "./exercise/questions";

function App() {
  return (
    <div className="App">
      <div className="flashcards">
        {questions.map((question) => (
          <FlashCards question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
