import React, { Component } from 'react'
import { Toast, ToastBody } from 'reactstrap'
import { MdClear } from 'react-icons/md'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Header from '../../Header'
import './index.css'

class Adoptions extends Component {
    componentDidMount() {
        this.props.load()
    }

    renderAdoptions = (adoption) => {
        return(
            <div className='p-3 my-2 rounded' key={adoption.id}>
                <Toast className='toast'>

                    <ToastBody className='toastBody'>
                        <img src={adoption.image} alt='Dog' height='60' width='60'/>
                        <h4>{adoption.name}</h4>
                        <MdClear className='mdClear' size={24} color='#000' opacity='0.3'/>
                    </ToastBody>
                    
                </Toast>
            </div>
        )
    }


    render() {
        return(
            <div className='adoption-container'>

                <Header />

                <h3>Lista de Adoção</h3>

                {
                    this.props.adoptions.isLoading &&
                    <p>Carregando, aguarde...</p>
                }

                {
                    !this.props.adoptions.isLoading && this.props.adoptions.data.length === 0 &&
                    <div className='alert alert-info'>Nenhuma Adoção cadastrada!</div>
                }

                { !this.props.adoptions.isLoading && this.props.adoptions.data.length > 0 && 
                
                    this.props.adoptions.data.map(this.renderAdoptions) 
                }
    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        adoptions: state.adoptions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getAdoptionsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adoptions)