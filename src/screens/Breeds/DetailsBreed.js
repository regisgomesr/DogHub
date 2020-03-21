import React, { Component } from 'react'
import {   
    Card, CardSubtitle, CardImg, CardBody, CardText,  Button, Container, Row
    } from 'reactstrap'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './DetailsBreed.css'

class DetailsBreed extends Component{

    state = {
        name: '',
        temperament: '',
        image: '',
        life_span: '',
        breed_group: '',
        weight: '',
        height: ''
    }

    componentDidMount() {
        this.props.load(this.props.match.params.id)
        this.props.reset()
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

            if(newValue.image !== prevState.image){
                breed.image = newProps.breeds.breed.image
            }

            if(newValue.life_span !== prevState.life_span){
                breed.life_span = newProps.breeds.breed.life_span
            }

            if(newValue.breed_group !== prevState.breed_group){
                breed.breed_group = newProps.breeds.breed.breed_group
            }

            if (newValue.weight !== prevState.weight) {
                const weight = newProps.breeds.breed.weight
                if (weight) {
                    breed.weight = weight[0].metric
                }
            }

            if (newValue.height !== prevState.height) {
                const height = newProps.breeds.breed.height
                if (height) {
                    breed.height = height[0].metric
                }
            }

            return breed
        }

        return null
    }

    handleSave = () => {

        this.props.create({
            image: this.state.image,
            name: this.state.name
        })
    }

    render(){

        console.log(this.props.adoptions)

        if(this.props.adoptions.saved) {
            return <Redirect to='/adoptions' />
        }

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
                            <div className="div-card">
                                <Card className='card-container'>
                                    <div className='overflow'>
                                        <CardImg className='card-img' top width='100%' src={this.state.image} alt="Card image" />
                                    </div>
                                    <CardBody>
                                        <h5 className='CardTitle'>{this.state.name}</h5>
                                        <Button className='CardButton' disabled>{this.state.temperament}</Button>
                                        <CardSubtitle className='subTitle'> - Age {this.state.life_span}</CardSubtitle>
                                        <CardText className='cardText'> - Group {this.state.breed_group}</CardText>
                                        <CardText className='cardText'> - Weight {this.state.weight}</CardText>
                                        <CardText className='cardText'> - Height {this.state.height}</CardText>
                                        <Button onClick={this.handleSave} color='secondary' className='btn'>Adotar</Button>
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
        breeds: state.breeds,
        adoptions: state.adoptions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: id => dispatch(ActionCreators.getBreedRequest(id)),
        create: (adoption) => dispatch(ActionCreators.createAdoptionRequest(adoption)),
        reset: () => dispatch(ActionCreators.createAdoptionReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBreed)