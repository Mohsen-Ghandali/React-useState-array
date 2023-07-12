import { useState } from "react";

const App = () => {
  const [item, setItem] = useState(["Mohsen", "Alex", "Martin"])
  const [name, setName] = useState("")
  const addName = () => {
    setItem([...item, name])
  }
  return (
    <>

      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />

        <button onClick={addName} className="mx-2">addName</button>

        <h5 className="mt-3">Name: {name}</h5>

        {
          item.map((elem, index) => {
            return (
              <li key={index}>{elem}</li>
            )
          })
        }
      </div>

    </>
  );
};

export default App;

