import React, { Component } from 'react'
import './App.css'
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

import ListBreeds from './screens/ListBreeds'

class App extends Component {
  render(){
    return (
        <Router>
            <Route exact path='/list-breeds' component={ListBreeds} />
        </Router>
    )
  }
  
}

export default App
