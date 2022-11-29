import { useState } from "react";
import { data } from "./data";
import Slide from "./Slide";
import './App.css';

function App() {
  const [tour, setTour] = useState(data);
  const [showText, setShowText] = useState(false);
  
  const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  
    const removeTour = (id) => {
    let newTours = tour.filter(element => element.id !== id);
    setTour(newTours);
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }
  
  return (
<div>

    <div className="container">
      <h1>Выбери {tour.length} {declination (tour.length, ['путешествие', 'путешествия', 'путешествий'])} по России</h1>
    </div>

    {tour.map((element => {
      const {id, tourName, descriptionMain, showMore} = element;

      return (
  <div key={id}>

         <div className="container">
            <h2>{tourName}</h2>
          </div>

          <div className="container">
          <p>{showMore ? descriptionMain : descriptionMain.substring(0, 100) + "..."}
          <button onClick={() => showTextClick(element)}>{showMore ? "Скрыть" : "Раскрыть"}</button>
          </p>
          </div>

         <div className="slide">
          <Slide numderTour={id}/> 
          <button onClick={() => removeTour(id)} className="btn">Не интересует</button>
         </div>
  </div>
      )
    }))}
    <div className="container">
      <button onClick={() => setTour([])} className="btn">Удалить все</button>
      <button onClick={() => window.location.reload(false)} className="btn">Обновить список</button>
    </div>
</div>
  );
}
export default App;
