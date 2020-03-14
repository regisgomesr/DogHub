import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../../Header'
import Breeds from './Breeds'
import DetailsBreed from './DetailsBreed'

const Breed = props => {

    return(

        <div>
            <Header />
            <Breeds />
            <Route path={`${props.match.path}/breeds/:id/details`} exact component={DetailsBreed} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breed: state.breed
    }
}

export default connect(mapStateToProps)(Breed)