import './App.css';
import data from './data.js'
import Card from './components/card';

function App() {
  console.log(data)
  // create an array of <Card /> components that we can display
  // basted on the data array

  // difference between map and forEach
  // map returns a new array
  // forEach does not return a new array

  // creates a card element and logs the object 
  let cardArray = data.map((obj, index) => {
    console.log(obj);
    return (
      <Card obj={obj} key={index} />
    )
  })

  console.log(cardArray);


  return (
    <div className="App">
      <h1>Welcom To Greece</h1>
      {cardArray}
    </div>
  );
}

export default App;
