import React from "react";
import Title from "./components/Title.js";
import Description from "./components/Description.js";
import Image from "./components/Image.js";
import Card from "./components/Card/Card.js";
import Character from "./components/Character/Character.js";

function App() {
  return (
    <div>
      <Title/>
      <Image/>
      <Description/>
      <Card/>
      <Character/>
    </div>
  );
}

export default App;
