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
    surname: "Jonas",
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
    let getInput = ({ target: { value, name } }) => {
      // console.log(e.target.value);
      console.log(name);
      this.setState({ [name]: value });
    };
    // let getInput2 = ({ target: { value, name } }) => {
    //   // console.log(e.target.value);
    //   console.log(name);
    //   this.setState({ surname: value });
    // };
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
        <input
          name="name"
          onChange={(e) => getInput(e, "React")}
          type="text"
          placeholder="name"
        />
        <input
          name="surname"
          onChange={(e) => getInput(e)}
          type="text"
          placeholder="Surname"
        />
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
