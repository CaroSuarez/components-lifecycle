import { memo, useEffect, useState } from "react";

const FunctionalComponent = ({ doNotShow, counterSeed }) => {
  const [counter, setCounter] = useState(0);

  const increment = () =>
    setCounter((prev) => {
      const next = prev + 1;
      if (next === doNotShow) {
        return doNotShow + 1;
      }
      if (next === 0) {
        return counterSeed;
      } else {
        return next;
      }
    });

  const decrement = () =>
    setCounter((prev) => {
      const next = prev - 1;
      if (next === doNotShow) {
        return doNotShow - 1;
      }
      if (next === 0) {
        return counterSeed;
      } else {
        return next;
      }
    });

  useEffect(() => {
    console.log("getDerivedStateFromProps");
    console.log("Component Did Mount");
    console.log(
      "useEffect that executes in the first render, that is, when the component is first attached to the DOM"
    );
    console.log(
      "Side effects that has to be executed onces the component is already placed in the DOM"
    );
    setCounter(counterSeed);

    return () => {
      console.log("componentWillUnmount con [] ");
      console.log(
        "This is executed only when the component is gonna be actually unmounted"
      );
    };
  }, []);

  useEffect(() => {
    console.log("Component wil update");
    console.log(
      "Executes after every render and depending on the dependencies array"
    );
    console.log(
      "IMPORTANT: To always include in the dependencies array all props and/or states that the effect uses"
    );

    return () => {
      console.log("componentWillUnmount con [counter] ");
      console.log("This is executed everytime the effect is executed ");
    };
  }, [counter]);

  return (
    <div className="Flex">
      <p> {counter} </p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
