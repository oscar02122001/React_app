import React from "react";

class App extends React.Component{
    render(){
        console.log(this.props.children);
        return(
            <div>
                {/* <h1>{data?.app?.id || 'Id not found'} - Hi {data.title}</h1> */}
            </div>
        )
    }
}



export default App
