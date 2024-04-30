// import React, { useState } from "react";
// import Avatar from "./project1/Avatar";
// import Bio from "./project1/Bio";
// import SkillList from "./project1/Skilllist";
// import skills from "./project1/skills";

import { useEffect } from "react";

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
// import "./styles.css";
// import FlashCards from "./exercise/Flashcrads";
// import questions from "./exercise/questions";

// function App() {
//   return (
//     <div className="App">
//       <div className="flashcards">
//         {questions.map((question) => (
//           <FlashCards question={question} key={question.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

// ptojectt 3

// accordion component
// import Accordion from "./exerciseAccordion/Accordion";
// import faqs from "./exerciseAccordion/Faqs";
// function App() {
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// import TipCalc from "./project3/TipCalc";
// function App() {
//   return (
//     <div>
//       <TipCalc />
//     </div>
//   );
// }

// import TextExpander from "./project4/TextExpander";
// import "../src/styles.css";
// function App() {
//   return (
//     <div>
//       <TextExpander>
//         Space travel is the ultimate adventure! Imagine soaring past the stars
//         and exploring new worlds. It's the stuff of dreams and science fiction,
//         but believe it or not, space travel is a real thing. Humans and robots
//         are constantly venturing out into the cosmos to uncover its secrets and
//         push the boundaries of what's possible.
//       </TextExpander>

//       <TextExpander
//         collapsedNumWords={20}
//         expandButtonText="Show text"
//         collapseButtonText="Collapse text"
//         buttonColor="#ff6622"
//       >
//         Space travel requires some seriously amazing technology and
//         collaboration between countries, private companies, and international
//         space organizations. And while it's not always easy (or cheap), the
//         results are out of this world. Think about the first time humans stepped
//         foot on the moon or when rovers were sent to roam around on Mars.
//       </TextExpander>

//       <TextExpander expanded={true} className="box">
//         Space missions have given us incredible insights into our universe and
//         have inspired future generations to keep reaching for the stars. Space
//         travel is a pretty cool thing to think about. Who knows what we'll
//         discover next!
//       </TextExpander>
//     </div>
//   );
// }
// import CurrConverter from "./project5/CurrConverter";
// import CurrencyConverter from "./project5/CurrencyConverter";

// function App() {
//   return (
//     <CurrConverter />
//     // <CurrencyConverter />
//   );
// }

// geolocation pract
// import { useState } from "react";
// // import { act } from "react-dom/test-utils";

// function useGeolocation() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);
//   // const { lat, lng } = position;

//   function getPosition() {
//     if (!navigator.geolocation)
//       return setError("Your browser does not support geolocation");

//     setIsLoading(true);
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setPosition({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         });
//         setIsLoading(false);
//       },
//       (error) => {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     );
//   }
//   return { isLoading, position, error, getPosition };
// }

// function App() {
//   const [countClicks, setCountClicks] = useState(0);

//   const {
//     isLoading,
//     position: { lat, lng },
//     error,
//     getPosition,
//   } = useGeolocation(handleClick);

//   function handleClick() {
//     setCountClicks((count) => count + 1);
//     getPosition();
//   }
//   return (
//     <div>
//       <button onClick={handleClick} disabled={isLoading}>
//         Get my position
//       </button>

//       {isLoading && <p>Loading position...</p>}
//       {error && <p>{error}</p>}
//       {!isLoading && !error && lat && lng && (
//         <p>
//           Your GPS position:
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
//           >
//             {lat}, {lng}
//           </a>
//         </p>
//       )}

//       <p>You requested position {countClicks} times</p>
//     </div>
//   );
// }

// export default App;

//
// pkeeman
// App.js
// import React, { useState, useEffect } from "react";
// import Scoreboard from "./ScoreBoard/js";
// import Card from "./Card";

// function App() {
//   const [cards, setCards] = useState([]);
//   const [currentScore, setCurrentScore] = useState(0);
//   const [bestScore, setBestScore] = useState(0);

//   useEffect(() => {
//     fetchDittoData();
//   }, []);

//   const fetchDittoData = async () => {
//     try {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//       if (!response.ok) {
//         throw new Error("Failed to fetch Ditto data");
//       }
//       const data = await response.json();
//       setCards([data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const shuffleCards = () => {
//     // Shuffle the cards array
//     const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
//     setCards(shuffledCards);
//   };

//   const handleCardClick = () => {
//     // Handle card click event
//     // For demonstration purposes, let's increment the current score
//     setCurrentScore(currentScore + 1);
//     shuffleCards(); // Shuffle the cards after each click
//   };

//   return (
//     <div className="app">
//       <h1>Pokémon Memory Game</h1>
//       <Scoreboard currentScore={currentScore} bestScore={bestScore} />
//       <div className="cards-container">
//         {cards.map((card, index) => (
//           <Card key={index} data={card} onClick={handleCardClick} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
function App() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    fetch(
      `https://emoji-api.com/emojis?access_key=4a819597914a2ca8ef33d8334b9b43e788375af6`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const firstTenEmojis = data.slice(0, 10);
        setEmojis(firstTenEmojis);
      });
  }, []);

  return (
    <div>
      <h1>Top 10 Emojis</h1>
      <ul>
        {emojis.map((emoji, index) => (
          <li key={index}>
            <span>{emoji.character}</span> - {emoji.unicodeName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
