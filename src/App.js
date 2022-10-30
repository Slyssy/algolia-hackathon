import logo from './logo.svg';
import react, { useState, useEffect } from "react";
import './App.css';
import BodyCard from './components/BodyCard';

function App() {

const [stories, setStories] = useState([]);

useState(()=>{

});

useEffect(()=>{
  fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
  .then((res)=> res.json())
  .then((data) => {
    setStories(data.hits)
  }) 
  // The empty array means "to run me once and only once"
},[]);
console.log(stories)

//



  return (
    <div className="App">
     <h1>Please send me new zoom link!!!! </h1>
      <BodyCard data={stories}/>
    </div>
  );
}

export default App;
