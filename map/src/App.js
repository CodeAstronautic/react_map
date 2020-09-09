import React from 'react';
import './App.css';
import Data from "../src/components/data"
import Name from "../src/components/name"
import ImportName from "../src/components/importName"
import Timer from "../src/components/timer"
import ComponentProps from "../src/components/componentsProps"
import Comp from "../src/components/comp"
import Math from "../src/components/math"
import HideShow from "../src/components/hideShow"
import New from "../src/components/new"
function App() {
  return (
    <div className="App">
        <Data />
        <Name />
        <ImportName />
        <Timer />
        <ComponentProps />
        <Comp />
        <Math />
        <HideShow />
        <New />
    </div>
  );
}

export default App;
