// import logo from './logo.svg';
import './App.css';


import Clock from './Components/Clock/Clock'
import Greeting from './Components/Greeting/Greeting'
import Focus from './Components/Focus/Focus'
import Weather from './Components/Weather/Weather'
import ToDoList from './Components/ToDo/Todo'
import Quotes from './Components/Quotes/Quotes'

function App() {
  return (
    // jsx = javascript xml
    <div className="App">
      {/* <h1>Momentum Clone</h1> */}
      <Clock />
      <Greeting />
      <Focus />
      <Weather />
      <ToDoList />
      <Quotes />
    </div>
  );
}

export default App;
