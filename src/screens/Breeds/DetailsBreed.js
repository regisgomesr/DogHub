import React, { Component } from 'react'
import {   
    CardDeck, Card, CardImg, CardBody, CardText,  Button, Container, Row
    } from 'reactstrap'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'

class DetailsBreed extends Component{

    componentDidMount() {
        this.props.load(this.props.match.params.id)
        console.log(this.props.match.params.id)
        
    }

    renderDetails = breed => {
        console.log(breed)
        return(
            <div className="card">

                            <CardDeck>
                                <Card className='card-container'>
                                <CardImg top src='http://placehold.it/318x180/000/fff' alt="Card image" />
                                <CardBody>
                                    <h5 className='CardTitle'>{breed.name}</h5>
                                    <Button className='CardButton' disabled>{breed.temperament}</Button>
                                    <CardText>{breed.weight}</CardText>
                                    <CardText>{breed.height}</CardText>
                                    <Button className='CardButton'>Adotar</Button>
                                </CardBody>
                                </Card>
                            </CardDeck>
                        </div>
        )
    }

    

    render(){

        console.log(this.props.breeds.data)

        return(
            <div className='detalhes-container'>
            
                
                {
                    this.props.breeds.isLoading &&
                    <p>Carregando, aguarde...</p>
                }

                { !this.props.breeds.isLoading &&
                    <Container fluid>
                        <h1>Detalhes</h1>
                        <Row>
                            { this.props.breeds.data.map(this.renderDetails) }
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
        load: id => dispatch(ActionCreators.getBreedRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBreed)