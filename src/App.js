import logo from './logo.svg';
import './App.css';
import TabsForm from "./components/TabsForm"

function App() {

const [stories, setStories] = useState([]);



useEffect(()=>{
  fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
  .then((res)=> res.json())
  .then((data) => {
    setStories(data.hits)
  })
  // The empty array means "to run me once and only once"
},[]);

//



  return (
    <div className="App">
     <h1>hello classmates! </h1>
     < TabsForm data={stories}/>
    </div>
  );
}

export default App;
