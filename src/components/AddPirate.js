import "../assets/css/AddPirateForm.css";
import React from "react";

const AddPirate = ({ addPirate }) => {
  const [name, setName] = React.useState("");
  const [vessel, setVessel] = React.useState("");
  const [weapon, setWeapon] = React.useState("");

  function createPirate(event) {
    event.preventDefault();
    const pirate = {
      name: name,
      vessel: vessel,
      weapon: weapon,
    };
    addPirate(pirate);

    setName("");
    setVessel("");
    setWeapon("");
  }

  return (
    <form onSubmit={createPirate}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Pirate name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="vessel">Vessel</label>
      <input
        id="vessel"
        type="text"
        placeholder="Pirate vessel"
        value={vessel}
        onChange={(event) => setVessel(event.target.value)}
      />
      <label htmlFor="weapon">Weapon</label>
      <input
        id="weapon"
        type="text"
        placeholder="Pirate weapon"
        value={weapon}
        onChange={(event) => setWeapon(event.target.value)}
      />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

export default AddPirate;
