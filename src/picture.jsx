import React from "react";
import Card from "./cards";
import "./picture.css";

const datas = [
  { imgUrl: "https://picsum.photos/id/234/200", title: "Parij" },
  { imgUrl: "https://picsum.photos/id/235/200", title: "Mountain" },
  { imgUrl: "https://picsum.photos/id/236/200", title: "River" },
  { imgUrl: "https://picsum.photos/id/237/200", title: "dog" },
  { imgUrl: "https://picsum.photos/id/238/200", title: "city" },
  { imgUrl: "https://picsum.photos/id/239/200", title: "greenary" },
  { imgUrl: "https://picsum.photos/id/240/200", title: "the wall" },
  { imgUrl: "https://picsum.photos/id/241/200", title: "road" },
  { imgUrl: "https://picsum.photos/id/242/200", title: "train" },
  { imgUrl: "https://picsum.photos/id/243/200", title: "nature" },
];

class Picture extends React.Component {
  render() {
    return (
      <div className="fruits-container">
        {datas.map((data) => {
          return <Card data={data} />;
        })}
      </div>
    );
  }
}

export default Picture;
