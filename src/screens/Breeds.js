import React, { Component } from 'react'
import api from '../services/api'
import {   
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Container, Row
    } from 'reactstrap'

class Breeds extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            breeds: []
        }

        this.renderBreeds = this.renderBreeds.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData(){
        this.setState({ isLoading: true })
        api.loadBreeds(this.props.match.params.breed).then((res) => {
            this.setState({
                isLoading: false,
                breeds: res.data
            })
        })
    }

    renderBreeds = (breeds) => {
        return(
            <div key={breeds.id}>
            <div>
            <Card>
              <CardImg top width="180px" height="318px" src='http://placehold.it/318x180/000/fff' alt="Card image" />
              <CardBody>
                <CardTitle>{breeds.name}</CardTitle>
                <CardSubtitle>{breeds.temperament}</CardSubtitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
            </div>
        )
    }

    render(){

        return(

            <div>
                <h1>Para adoção</h1>
                {
                    this.state.isLoading &&
                    <p>Carregando, aguarde...</p>
                }
                {
                    !this.state.isLoading && this.state.breeds.length === 0 &&
                    <div className='alert alert-info'>Nenhuma Raça cadastrada!</div>
                }

                { !this.state.isLoading && this.state.breeds.length > 0 &&
                    <Container fluid>
                        <Row>
                            { this.state.breeds.map(this.renderBreeds) }
                        </Row>
                    </Container>        
                }
            </div>
            
        )
    }
}
export default Breeds