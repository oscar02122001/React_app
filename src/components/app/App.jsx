import React from "react";
import "./App.css";
import Picture from "../pictures(project)/picture";
import State from "../lesson-3/state";
import Students from "../lesson-4/main";
import Styled from "../6 - Styled component/styled";
import Memo from "../17-memo/memo";

let fullName = function () {
  return this.surname + " " + this.name;
};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <Picture /> */}
        {/* <State /> */}
        {/* {data.map((val) => {
          return <Students data={val} />;
        })} */}
        {/* <Students /> */}
        <Styled />
        {/* <Memo /> */}
      </div>
    );
  }
}

export default App;
