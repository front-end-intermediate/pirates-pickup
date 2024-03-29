import Header from "./components/Header";
import Pirate from "./components/Pirate";
import React from "react";
import AddPirate from "./components/AddPirate";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  const [pirates, setPirates] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/pirates")
      .then((res) => res.json())
      .then((data) => {
        setPirates(data);
      });
  }, []);

  const addPirate = (pirate) => {
    pirate.image = "avatar.png";
    setPirates((prev) => [pirate, ...prev]);
  };

  const removePirate = (name) => {
    const newPirates = pirates.filter((pirate) => pirate.name !== name);
    setPirates(newPirates);
  };

  return (
    <div>
      <Header title={randomize()} />
      <AddPirate addPirate={addPirate} />
      {pirates.map((pirate, index) => (
        <Pirate
          key={index}
          pirate={pirate}
          tagline={randomize()}
          removePirate={removePirate}
        />
      ))}
    </div>
  );
}

export default App;
