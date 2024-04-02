import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormAltas from './components/FormAltas'

function App() {


  return (
    <>
<div className="bg-gray-800 p-4 w-full">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="text-white text-2xl font-bold">DGT</h1>
    <a href="https://react.dev" target="_blank" className="inline-block">
      <img src={reactLogo} className="logo react h-8" alt="React logo" />
    </a>
  </div>
</div>
      <div>
      <FormAltas/>
      
      </div>
    </>
  )
}

export default App
