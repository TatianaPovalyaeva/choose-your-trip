import { useState } from "react";
import { data } from "./data";
import './App.css';

function Slide(props) {
  const [card]=useState(props.numderTour-1);
  const [arrayDescr, setArrayDescr]=useState(0);
  const {image, description}=data[card]
  const imageSet = image [arrayDescr]
  const descriptionSet = description[arrayDescr]

  const previousPhoto=()=>{
    setArrayDescr ((arrayDescr=>{
      arrayDescr--;
      if (arrayDescr<0){
        arrayDescr=image.length-1;
      }
      return arrayDescr
    }))
  }

  const nextPhoto=()=>{
    setArrayDescr ((arrayDescr=>{
      arrayDescr++;
      if (arrayDescr>image.length-1){
        arrayDescr=0;
      }
      return arrayDescr
    }))
  }
    return (<div>
      <div>
      <img src={imageSet} width="400px" alt = "tour"/>
      <h3>{descriptionSet}</h3>
      </div> 

      <div className="container">
      <button onClick={previousPhoto} className="btn">Назад</button> 
      <button onClick={nextPhoto} className="btn">Вперед</button>
    </div>
    </div>
    )
}
export default Slide;