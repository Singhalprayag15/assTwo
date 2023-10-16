import react from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import card_data from "./data/card_data";

function App() {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-3 justify-evenly gap-y-12 mx-auto mb-10'>
        <Card />
      </div>
    </>
  );
}

export default App;
