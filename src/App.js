import React, { Component } from 'react'
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

import Breeds from './screens/Breeds'

class App extends Component {
  render(){
    return (
        <Router>
            <Route exact path='/breeds' component={Breeds} />
        </Router>
    )
  }
  
}

export default App
