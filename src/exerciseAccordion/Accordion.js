import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordian">
      {data.map((el, index) => (
        <AccordionItem
          key={el.title}
          title={el.title}
          num={index}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {el.text}
          {/* here you an copy and have multiples ones so u cant put anything yu */}
          {/* like} */}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
