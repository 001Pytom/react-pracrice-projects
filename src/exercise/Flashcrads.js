import { useState } from "react";

function FlashCards({ question }) {
  const [selectedID, setselectedID] = useState(null);

  function handleDisplay(id) {
    setselectedID(id !== selectedID ? id : null);
  }

  return (
    <div
      onClick={() => handleDisplay(question.id)}
      className={question.id === selectedID ? "selected" : ""}
    >
      <p>{question.id === selectedID ? question.answer : question.question}</p>
    </div>
  );
}

export default FlashCards;
