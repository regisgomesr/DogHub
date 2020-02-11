import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

import { Container } from 'reactstrap'

import Breeds from './screens/Breeds'
import Details from './screens/Details'
import Home from './screens/Home'

class App extends Component {
  render(){
    return (

      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path='/' component={Home} />
            <Route exact path='/breeds' component={Breeds} />
            <Route exact path='/details' component={Details} />
          </Container>
        </Router>
      </Provider>
    )
  }
}
export default App
