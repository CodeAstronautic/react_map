import React from "react"
//const element = <Welcome name="Pooja" />;
function Welcome(props) {
    return <h5>Hello, {props.name}</h5>;
  }
function Name () {
    return (
        <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    
    </div>)
}

function Space () {
    return (
        <Name />
    )
}
  export default Space