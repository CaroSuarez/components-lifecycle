import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    console.log("1. Constructor");
    console.log("Component is initialized");

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps");
    console.log(
      "Gets the props and sets the state of the component using that props if it is required"
    );
    if (state.counter === 0) {
      state.counter = props.counterSeed;
    }
    return null;
  }

  componentDidMount() {
    console.log("4. componentDidMount");
    console.log(
      "Side effects that has to be executed onces the component is already placed in the DOM"
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(" shouldComponentUpdate");
    console.log(`Next state of counter will be: ${nextState.counter}`);
    if (nextState.counter === nextProps.doNotShow) {
      console.log("DO NOT RENDER");
      return false;
    }
    console.log(
      `las next props son las siguientes: ${nextProps.initialNumber}`
    );
    return true;
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("The component is been taken out of the DOM");
  }

  render() {
    console.log("3. render");
    console.log("Puts the HTML on the DOM");
    console.log(
      "/////// END OF THIS RENDER ////// END OF THIS RENDER //////////"
    );
    return (
      <div className="Flex">
        <p> {this.state.counter} </p>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
