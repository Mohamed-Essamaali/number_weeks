import logo from './logo.svg';
import Weeks from './components/number_weeks'
import {Route} from 'react-router-dom'
import './App.css';
import DisplayData from './components/displayData';
import Navs from './components/Navs';
import HomePage from './components/homePage';
import UsefullLinks from './components/Links';


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Due date Calculator</h1> */}
      <Route path='/'>
        <Navs/>
      </Route>
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Route exact path='/weeks'>
        <Weeks/>
      </Route>
      <Route exact path ='/dueDate'>
        <DisplayData/>
      </Route>
      <Route exact path ='/links'>
        <UsefullLinks/>
      </Route>
      
    </div>
  );
}

export default App;
