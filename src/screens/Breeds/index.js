import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../../Header'
import Breeds from './Breeds'
import DetailsBreed from './DetailsBreed'
import Adoptions from '../Adoptions'

const Index = props => {

    console.log(props)

    return(

        <div className='div'>
            <Header />
            <Route exact path={`/breeds`} component={Breeds} />
            <Route exact path={`${props.match.path}/:id/details`} component={DetailsBreed} />
            <Route exact path={`${props.match.path}/adoptions`} component={Adoptions} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breed: state.breed
    }
}

export default connect(mapStateToProps)(Index)