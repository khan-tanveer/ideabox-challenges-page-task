import React from "react";
import "./App.css";
import Card from "./components/Card";
import CardIdea from "./components/CardIdea";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <CardIdea />
    </div>
  );
}

export default App;
