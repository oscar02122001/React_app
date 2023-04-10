import React from "react";
import './App.css'
import Picture from "./picture";

class App extends React.Component{
    render(){
        console.log(this.props.children);
        return(
            <div className="app">
                <Picture />
                {/* <h1>{data?.app?.id || 'Id not found'} - Hi {data.title}</h1> */}
            </div>
        )
    }
}



export default App
