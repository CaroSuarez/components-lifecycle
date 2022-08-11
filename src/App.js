import { useEffect, useState } from "react";

import ClassComponent from "./components/class-component";
import FunctionalComponent from "./components/functional-component";

import "./App.css";

function App() {
  const [mountClassComponent, setMountClassComponent] = useState(false);
  const [mountFunctionalComponent, setMountFunctionalComponent] =
    useState(false);

  return (
    <div className="App">
      {mountClassComponent && <ClassComponent doNotShow={3} counterSeed={7} />}
      {mountFunctionalComponent && <FunctionalComponent />}

      <br></br>
      <br></br>

      <button onClick={() => setMountClassComponent(true)}>
        Mount Class Component
      </button>
      <button onClick={() => setMountClassComponent(false)}>
        Unmount Class Component
      </button>
      <button onClick={() => setMountFunctionalComponent(true)}>
        Mount Class Component
      </button>
      <button onClick={() => setMountFunctionalComponent(false)}>
        Unmount Class Component
      </button>
    </div>
  );
}

export default App;
