import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Pirate tagline="Ahoy from the pirate component" />
      <Pirate tagline="Pirate component" />
      <Pirate tagline="Ahoy" />
    </div>
  );
}

function Pirate({ tagline }) {
  return <p>{tagline}</p>;
}

export default App;
