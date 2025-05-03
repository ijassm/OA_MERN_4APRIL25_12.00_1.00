import { Component, Fragment } from "react";

class Student extends Component {
  render() {
    return (
      <>
        <h1>Student</h1>
        <p>{this.props.name} is a student</p>
        <p>{this.props.age} years old</p>
      </>
    );
  }
}

export class App extends Component {
  constructor(a) {
    super(a);
    this.state = {
      name: "React JS",
    };
    // console.log(this);
  }

  static getDerivedStateFromProps(props, state) {

  };

  // handleChange = () => {
  //   // this.state.name = "React JS🐉";
  //   this.setState({ name: "Declarative React🐉" });
  //   console.log(this.state.name, "state");
  // };

  handleChange = (e) => {
    const value = e.target.value;

    console.log(value, "value");
    this.setState({ name: value });

    // this.state.name = "React JS🐉";
    // this.setState({ name: "Declarative React🐉" });
    // console.log(this.state.name, "state");
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <h1>Hello {this.state.name}</h1>
        <p>{this.props.name} is powerfull library </p>
        <Student name="John" age={20} />
        <button onClick={this.handleChange}>Change</button>
      </>
    );
  }
}
