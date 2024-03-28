import Button from "./Button";
import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";

function Pirate({
  pirate: { name, year, weapon, vessel, desc },
  tagline,
  removePirate,
}) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{name}</h3>
        <ul>
          <li>Died: {year}</li>
          <li>Weapon: {weapon}</li>
          <li>Vessel: {vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{tagline}</h2>
        <p>{desc}</p>
        <Button onClick={() => removePirate(name)} text="Remove Pirate" />
      </article>
    </section>
  );
}

export default Pirate;
