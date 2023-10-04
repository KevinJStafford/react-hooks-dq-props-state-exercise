import React, {useState} from "react";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import offspring from "../data"

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const [weight, setWeight] = useState(50)

  function handleChangeWeight(e) {
    if (e.target.name === "+") {
      setWeight(weight + 1);
    }else {
      setWeight(weight - 1);
    }
  }
  let hogBaby
  offspring.forEach((data) => {
    if(props.id === data.id){
      hogBaby = data
    }
  })
  const eyeColorImageObject = {blue:BlueBaby, sun:SunBaby, glowing:GlowingBaby}
  return (
    <li className="hogbabies">
      <h1>{hogBaby.name}</h1>
      <h3 onChange={handleChangeWeight}>Weight: {weight}</h3>
      <h3>Hobby: {hogBaby.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorImageObject[props.eyeColor]}
          style={{ height: weight*10 }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
