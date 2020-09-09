import React from "react"

function tick() {
    const element = (
      <div>
        <h3>Hello, world!</h3>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

    return (
<h4>{element}</h4>
        )
}
export default tick