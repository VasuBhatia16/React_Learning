import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

function App() {
  
  let myObj = {
    username: "Vasu Bhatia",
    age: 19
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'>This is a Test</h1>
      <Card username="Test 1" btnText="Click me"/>
      <Card username="Test 2" btnText="Visit me"/>
    </>
  )
}

export default App
