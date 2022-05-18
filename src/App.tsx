import React, { FC } from "react";
import BtgSummer from "./components/BtgSummer";
import './App.scss'

const App: FC = () => {
  return (
    <div className="container">
      <h1>Les animations de BTG</h1>
      <div className="grid">
        <BtgSummer />
      </div>
    </div>
  );
};

export default App;
