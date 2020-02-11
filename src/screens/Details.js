import React, { Component } from 'react'
import {   
    CardDeck, Card, CardImg, CardBody, CardText,  Button, Container, Row
    } from 'reactstrap'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import Header from '../Header'

class Details extends Component{

    state = {
        name: '',
        temperament: '',
        weight: '',
        height: ''
    }

    componentDidMount() {
        this.setState({
            name: this.props.breed.name,
            temperament: this.props.breed.temperament,
            weight: this.props.breed.weight.metric,
            height: this.props.breed.height.metric
        })
        this.props.load()
    }

    renderBreed = breed => {
        return(
            <div className="card" key={breed.id}>

                <CardDeck>
                    <Card className='card-container'>
                    <CardImg top src='http://placehold.it/318x180/000/fff' alt="Card image" />
                    <CardBody>
                        <h5 className='CardTitle'>{this.state.name}</h5>
                        <Button className='CardButton' disabled>{this.state.temperament}</Button>
                        <CardText>{this.state.weight}</CardText>
                        <CardText>{this.state.height}</CardText>
                        <Button className='CardButton'>Adotar</Button>
                    </CardBody>
                    </Card>
                </CardDeck>
            </div>
        )
    }

    render(){

        return(
            <div className='detalhes-container'>

                <Header />
                <h1>Detalhes</h1>
                {
                    this.props.breed.isLoading &&
                    <p>Carregando, aguarde...</p>
                }

                { !this.props.breed.isLoading &&
                    <Container fluid>
                        <Row>
                            { this.props.breed.data.map(this.renderBreed) }
                        </Row>
                    </Container>        
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breed: state.breed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: id => dispatch(ActionCreators.getBreedRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)