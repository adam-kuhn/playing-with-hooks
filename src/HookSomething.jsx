import React, {useState} from "react";

const possibleName = ["John", "Adam", "Elisa", "Jane"]

const getRandomNumber = () => {
  const max = possibleName.length
  const randomNumber = Math.floor(Math.random(max) * Math.floor(max))
  return randomNumber
}

const HookSomething = () => {
  const [name, setName] = useState(possibleName[0])
  return (
    <div>
      <p>I will try to hook some stuff</p>
      <p>My name is {name}</p>
      <button type="button" onClick={() => setName(possibleName[getRandomNumber()])}>
      Change My name
      </button>
    </div>

  )
}

export default HookSomething