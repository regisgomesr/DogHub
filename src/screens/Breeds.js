import React, { Component } from 'react'
import {   
    CardDeck, Card, CardImg, CardBody, CardLink,  Button, Container, Row
    } from 'reactstrap'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import Header from '../Header'


class Breeds extends Component{

    componentDidMount() {
        this.props.load()
    }

    renderBreeds = breed => {
        return(
            <div className="card" key={breed.id}>

                <CardDeck>
                    <Card className='card-container'>
                    <CardImg top src='http://placehold.it/318x180/000/fff' alt="Card image" />
                    <CardBody>
                        <h5 className='CardTitle'>{breed.name}</h5>
                        <Button className='CardButton' disabled>{breed.temperament}</Button>
                        <br/>
                        <CardLink href="/details">Detalhes</CardLink>
                    </CardBody>
                    </Card>
                </CardDeck>
            </div>
        )
    }

    render(){

        return(

            <div className='adocao-container'>
                <Header />
                <h1>Para adoção</h1>
                {
                    this.props.breeds.isLoading &&
                    <p>Carregando, aguarde...</p>
                }
                {
                    !this.props.breeds.isLoading && this.props.breeds.data.length === 0 &&
                    <div className='alert alert-info'>Nenhuma Raça cadastrada!</div>
                }

                { !this.props.breeds.isLoading && this.props.breeds.data.length > 0 &&
                    <Container fluid>
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