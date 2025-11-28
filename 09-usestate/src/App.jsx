import React, { useState } from 'react'

/*
  ⭐ useState BASIC EXPLANATION ⭐

  - useState is a React Hook.
  - A Hook allows you to add features (state, lifecycle, context, etc.) to a component.
  - useState is used to store data that changes on UI.
  
  Syntax: 
      const [stateVariable, setterFunction] = useState(initialValue)

  - stateVariable → holds the current value
  - setterFunction → updates the value and re-renders the UI
  - initialValue → starting value (number, string, array, object, boolean... anything)
*/

const App = () => {

  // ⭐ Example 1: Basic Counter
  // num = state variable (current value)
  // setNum = function used to update 'num'
  // 0 is initialValue
  const [num, setNum] = useState(0)

  // Increase value by 1
  function funIncrease(){
    // ❗ You should NEVER modify state directly like num++
    setNum(num + 1)
  }

  // Decrease value by 1
  function funDecrease(){
    setNum(num - 1)
  }

  // Increase value by 5
  function jumpByFive(){
    setNum(num + 5)
  }

  /*
    ⭐ IMPORTANT RULES OF STATE ⭐
    
    1️⃣ State updates re-render the UI.
        - If you change normal variables, React DOES NOT update UI.
        - Only setNum(...) will make UI change.

    2️⃣ State updates are async.
        - React may batch multiple updates.
        Example: setNum(num + 1); setNum(num + 1);
        Both may run with the same value.

    3️⃣ State MUST be used inside component.
        - You cannot use useState outside a component.

    4️⃣ NEVER MODIFY STATE DIRECTLY
        Wrong ❌ num = num + 1
        Correct ✔ setNum(num + 1)

    5️⃣ initialValue runs only once when component loads.
  */

  return (
    <div>
      <h1>Current Value: {num}</h1>

      {/* Every button updates the state */}
      <button onClick={funIncrease}>Increase</button>
      <button onClick={funDecrease}>Decrease</button>
      <button onClick={jumpByFive}>Jump by 5</button>
    </div>
  )
}

export default App
