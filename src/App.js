import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import { 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom'

import { Container } from 'reactstrap'

import Home from './screens/Home'
import Breeds from './screens/Breeds'


class App extends Component {
  render(){
    return (

      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path='/' component={Home} />
            <Route path='/breeds' component={Breeds} />
          </Container>
        </Router>
      </Provider>
    )
  }
}
export default App
