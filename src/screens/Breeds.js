import React, { Component } from 'react'
import {   
    CardDeck, Card, CardImg, CardBody, CardLink,  Button, Container, Row
    } from 'reactstrap'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import Header from '../Header'

import './Breeds.css'

import dog6 from '../assets/dog6.jpg'


class Breeds extends Component{

    componentDidMount() {
        this.props.load()
    }

    renderBreeds = breed => {
        return(
            <div className="div-card" key={breed.id}>

                    <Card className='card-container'>
                        <div className='overflow'>
                        <CardImg className='card-img' top width='100%' src={dog6} alt="Card image" />
                        </div>
                        <CardBody>
                            <h5 className='CardTitle'>{breed.name}</h5>
                            <Button className='CardButton' disabled>{breed.temperament}</Button>
                            <br/>
                            <a href="/details" className='btn btn-outline-success'>Detalhes</a>
                        </CardBody>
                    </Card>
                
            </div>
        )
    }

    render(){

        return(

            <div className='adocao-container'>
                <Header />
                
                {
                    this.props.breeds.isLoading &&
                    <p>Carregando, aguarde...</p>
                }
                {
                    !this.props.breeds.isLoading && this.props.breeds.data.length === 0 &&
                    <div className='alert alert-info'>Nenhuma Raça cadastrada!</div>
                }

                { !this.props.breeds.isLoading && this.props.breeds.data.length > 0 &&
                    <Container fluid className='container-fluid d-flex justify-content-center'>

                        <h1>Para adoção</h1>
                        <Row>
                            { this.props.breeds.data.map(this.renderBreeds) }
                        </Row>
                    </Container>        
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breeds: state.breeds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getBreedsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Breeds)