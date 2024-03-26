import "../assets/css/Header.css";
import logo from "../assets/img/anchor.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Foobar</h1>
    </div>
  );
}

export default Header;
