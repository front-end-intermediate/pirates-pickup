import Header from "./components/Header";
import Pirate from "./components/Pirate";
import piratesFile from "./data/sample-pirates-array";
import React from "react";
import AddPirate from "./components/AddPirate";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

// const addPirate = (pirate) => console.log("from the App component: ", pirate);

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  const [pirates, setPirates] = React.useState(piratesFile);

  // const addPirate = (pirate) => {
  //   const newPirates = [...pirates];
  //   newPirates.unshift(pirate);
  //   setPirates(newPirates);
  // };

  // const addPirate = (pirate) => {
  //   const newPirates = [pirate, ...pirates];
  //   setPirates(newPirates);
  // };

  const addPirate = (pirate) => {
    pirate.image = "avatar.png";
    setPirates((prev) => [pirate, ...prev]);
  };

  return (
    <div>
      <Header title={randomize()} />
      <AddPirate addPirate={addPirate} />
      {pirates.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} tagline={randomize()} />
      ))}
    </div>
  );
}

export default App;
