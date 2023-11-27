import './App.css'
import Card from './component/Card'
import('tailwindcss').Config

function App() {

  const myObj = {
    user:"prashant",
    age:21
  }

  return (
    <>
      <h1 className="bg-red-400 mb-5 text-black p-5 rounded-3xl">Tailwind Test</h1>
      <Card username="honey" obj = {myObj}/>
      <Card />
    </>
  )
}

export default App
