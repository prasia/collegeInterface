
import Popup from './components/Popup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div className = "App">
      <main>
        <h1>Your Colleges</h1>
        <div className = "wrapper">
        <Card
        header = "College #1"
        description = "Private/Public University in City, State. Your Target/Reach/Safety Choice"
        img = "images/campus.png/"/>
        <Card
        header = "College #2"
        description = "Private/Public University in City, State. Your Target/Reach/Safety Choice"
        img = "images/campus.png/"
        />
        <Card
        header = "College #3"
        description = "Private/Public University in City, State. Your Target/Reach/Safety Choice"
        img = "images/campus.png/"/>
        </div>
        <div className = "wrapper">
        <Card
        header = "College #4"
        description = "Private/Public University in City, State. Your Target/Reach/Safety Choice"
        img = "images/campus.png/"/>
        <Card
        header = "College #5"
        description = "Private/Public University in City, State. Your Target/Reach/Safety Choice"
        img = "images/campus.png/"/>
        <Card
        header = "College #6"
        description = "Private/Public University in City, State. Your Target/Reach/Safety Choice"
        img = "images/campus.png/"/>
        </div>
        </main>
      </div>
  );
}

function Card(props){
  const [buttonPopup, setButtonPopup] = useState(false);
  return(
    <div className = "card">
      <div className = "card__body">
        <h2 className = "card__title">{props.header}</h2>
        <img src = {props.img} />
        <p className = "class__description">{props.description}</p>
        <button className = "class__button" onClick = {() => setButtonPopup(true)}>Open Sesame</button>
        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
          <h1>College Name</h1>
          <h4>Private/Public University in City, State</h4>
          <img src = "images/campus.jpg"/>
          <p>This is a description of the college. It can contain all kinds of information, like the steretypes associated with the school, the schools values, traditions, and other bits of information that the stats don't tell.</p>
          <ul><h5>The Average Student</h5>
            <li>GPA - 4.00 UW, 4.67 W</li>
            <li>SAT/ACT - 1500; 750 M, 750 R</li> /*Based on user's test of choice*/ 
            <li>Household Salary - $200,000 per annum</li>
            <li>Most Likely Majors- Engineering, Computer Science, Pre-Medical</li> /*In that order*/ 
          </ul>
        </Popup>
      </div>
    </div>
  )
}

export default App;