import React, {useState, useEffect} from "react";

const possibleName = ["John", "Adam", "Elisa", "Jane"]

const getRandomNumber = () => {
  const max = possibleName.length
  const randomNumber = Math.floor(Math.random(max) * Math.floor(max))
  return randomNumber
}



const HookSomething = () => {
  const [nameObj, setNameObj] = useState({name: possibleName[0], clicks: 0})
  useEffect(() => {
    alert(`hello ${nameObj.name.toUpperCase()}!!!!!`)
  })
  return (
    <div>
      <p>I will try to hook some stuff</p>
      <p>My name is {nameObj.name}</p>
      <p>You have tried to change names {nameObj.clicks} times</p>
      <button type="button" onClick={() => setNameObj(
        {name:possibleName[getRandomNumber()], 
         clicks: nameObj.clicks + 1})}>
      Change My name
      </button>
    </div>

  )
}

export default HookSomething