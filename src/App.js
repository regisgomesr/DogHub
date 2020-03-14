import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

import { Container } from 'reactstrap'

import Home from './screens/Home'
import Breed from './screens/Breed'


class App extends Component {
  render(){
    return (

      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path='/' component={Home} />
            <Route exact path='/breed' component={Breed} />
          </Container>
        </Router>
      </Provider>
    )
  }
}
export default App
