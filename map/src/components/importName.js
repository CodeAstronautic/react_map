import React from "react"

function formatName(user) {
    console.log(user)
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  const element = (
    <h4>
      Hello, {formatName(user)}!
    </h4>
  );
function final () {
    return (
       <h1>{element}</h1>
    )
}

export default final;