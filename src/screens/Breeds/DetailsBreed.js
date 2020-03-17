import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {   
    CardDeck, Card, CardImg, CardBody, CardText,  Button, Container, Row
    } from 'reactstrap'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'

class DetailsBreed extends Component{

    state = {
        name: '',
        temperament: ''
    }

    componentDidMount() {
        this.props.load(this.props.match.params.id)
        
    }

    static getDerivedStateFromProps(newProps, prevState){

        console.log(newProps, prevState)
        if(newProps.breeds && newProps.breeds.breed  &&
            (prevState.name === undefined || prevState.name === '')) {
            const breed = {}
            const newValue = newProps.breeds.breed

            if(newValue.name !== prevState.name){
                breed.name = newProps.breeds.breed.name
            }

            if(newValue.temperament !== prevState.temperament){
                breed.temperament = newProps.breeds.breed.temperament
            }


            return breed
        }

        return null
    }

    
    render(){

        return(
            <div className='detalhes-container'>
            
                
                {
                    this.props.breeds.isLoading &&
                    <p>Carregando, aguarde...</p>
                }

                { !this.props.breeds.isLoading &&
                    <Container fluid className='container-fluid d-flex justify-content-center'>
                        <h1>Detalhes</h1>
                        <Row>
                            <div className="card">

                                
                                    <Card className='card-container'>
                                    <div className='overflow'>
                                        <CardImg className='card-img' top width='100%' src={this.state.image} alt="Card image" />
                                    </div>
                                    <CardBody>
                                        <h5 className='CardTitle'>{this.state.name}</h5>
                                        <Button className='CardButton' disabled>{this.state.temperament}</Button>
                                        <br/>
                                        <Link className='btn btn-outline-success' to={`breeds/adotar`}>Adotar</Link>
                                    </CardBody>
                                    </Card>
                                
                            </div>
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