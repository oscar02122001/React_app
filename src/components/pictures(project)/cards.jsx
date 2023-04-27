import React from "react";
import "./picture.css";

class Card extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="card-wrap">
        <div className="card-container">
          <img className="img" src={data.imgUrl} alt="img" />
          <h3 className="card-text">{data.title}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
