import React from 'react';
import User from './User';
//import Home from './components/Home';
import HomeContainer from './containers/HomeContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <HomeContainer/>
     {/*<h1>App Component</h1>*/}
       {/*<Home/>*/}
     {/*<User data={{name:'jyoti',age:26}}/>*/}
    </div>
  );
}

export default App;
