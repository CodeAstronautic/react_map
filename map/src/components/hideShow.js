import React, { useState } from "react";

export default function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Toggle Text</button>
      {showText && <div>This text will show!</div>}
    </div>
  );
}
