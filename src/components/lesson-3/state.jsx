import React from "react";

class State extends React.Component {
  // constructor(prop) {
  //   super(prop);
  //   this.state = {
  //     count: 1,
  //   };
  // }
  state = {
    count: 1,
    name: "Oscar",
  };
  render() {
    // let count = 1;
    // console.log(this);
    let plus = () => {
      this.setState({ count: ++this.state.count });
    };
    let minus = () => {
      this.setState({ count: --this.state.count });
    };
    let getInput = (e) => {
      console.log(e.target.value);
      this.setState({ name: e.target.value });
    };
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        <h1>Name: {this.state.name}</h1>
        <input name="name" onChange={getInput} type="text" placeholder="name" />
        <select onChange={getInput} name="select">
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="surname">Surname</option>
        </select>
        <br />
      </div>
    );
  }
}

export default State;
