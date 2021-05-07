import './App.css';
import React, { Component } from 'react';
import Header from './components/Header'
import BarraPesquisa from "./components/BarraPesquisa"
import Card from './components/Card';

class App extends Component {

  constructor(props){
    super(props);
  }

  
  render(){
    return(
      <div className = "App" >
      
      <div>
        <Header/>
      </div>

      <div>
        <BarraPesquisa render={pokemon => (
          <Card pokemon={pokemon}/>
        )}>

        </BarraPesquisa>
      </div>


      
      <footer>
        
      </footer>
    </div>
    );

  };
        
}

export default App;










