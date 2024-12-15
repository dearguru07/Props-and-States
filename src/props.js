import React from "react";

const data = [
  {
    imgId: "https://avatars.githubusercontent.com/u/145788349?v=4",
    info: "Ben10",
    para: "React Hero",
    name: "Nice Boy",
  },
  {
    imgId:"https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8=",
    info: "Panda",
    para: "Heroine",
    name: "NiceGirl",
  },
  {
    imgId:
      "https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Anime",
    para: "Hero",
    name: "teda",
  },
  {
    imgId:
      "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Laufing",
    para: "StarMa",
    name: "vey Nice",
  },
  {
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },
  {
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },{
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },{
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },{
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },{
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },{
    imgId:
      "https://images.pexels.com/photos/29707252/pexels-photo-29707252/free-photo-of-giant-cartoon-balloon-at-city-parade-event.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "Hourse",
    para: "Animal",
    name: "janthuvu",
  },
];
const Properties = (props) => {
  return (
    <di>
      <img src={props.data.imgId} alt=""></img>
      <h3>{props.data.info}</h3>
      <h5>{props.data.para}</h5>
      <p>{props.data.name}</p>
    </di>
  );
};

const Card = () => {
  return (
    <div>
      {data.map((x) => {
        return <Properties data={x} />;
      })}
    </div>
  );
};
export default Card;
