import React from "react";
import "./App.css";
import Picture from "../pictures(project)/picture";
import State from "../lesson-3/state";
import Students from "../lesson-4/main";

let fullName = function () {
  return this.surname + " " + this.name;
};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <Picture />
        <State /> */}
        {/* {data.map((val) => {
          return <Students data={val} />;
        })} */}
        <State />
        <Students />
      </div>
    );
  }
}

export default App;
