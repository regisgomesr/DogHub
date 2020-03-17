import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../../Header'
import Breeds from './Breeds'
import DetailsBreed from './DetailsBreed'

const Index = props => {

    console.log(props)

    return(

        <div>
            <Header />
            <Route exact path={`/breeds`} component={Breeds} />
            <Route exact path={`${props.match.path}/:id/details`} component={DetailsBreed} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breed: state.breed
    }
}

export default connect(mapStateToProps)(Index)