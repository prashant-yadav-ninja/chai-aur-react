// import { useState } from 'react'
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15 ;

  function inc() {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter( (prevCounter) => prevCounter+1 )
    setCounter( (prevCounter) => prevCounter+1 )
    setCounter( (prevCounter) => prevCounter+1 )
    setCounter( (prevCounter) => prevCounter+1 )

    console.log(counter);
    // if (counter <= 19) {
    //   setCounter(counter + 1);
    //   // console.log(counter);
    //   // counter += 1 ;
    //   // while (counter >= 0 && counter < 1 ){

    //   // console.log('click inc ',counter);
    //   // }
    // } else {
    //   // counter = 0
    //   setCounter(0);
    //   // console.log(counter)
    // }
  }

  function dec() {
    setCounter(counter-1)
    // if (counter >= 1) {
    //   setCounter(counter - 1);
    //   // console.log(counter);
    //   // counter -= 1 ;
    //   console.log("click dec", counter);
    // }
  }

  return (
    <>
      <h1>chai aur react </h1>
      <h2>counter value: {counter}</h2>
      <button onClick={inc}>click to increase counter {counter} </button>
      <br />
      <button onClick={dec}>click to decrese counter {counter} </button>
    </>
  );
}

export default App;
