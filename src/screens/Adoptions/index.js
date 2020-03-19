import React from 'react'
import { Toast, ToastBody } from 'reactstrap'
import { MdClear } from 'react-icons/md'

import img6 from '../../assets/6.jpg'

import './index.css'

const Adoptions = props => {
    return(
        
        <div className='adoption-container'>
              
            <h3>Lista de Adoção</h3>

            <div className="p-3 my-2 rounded">
                <Toast className='toast'>
                    
                    <ToastBody className='toastBody'>
                        <img src={img6} alt="Image" height="60" width="60"/>
                        <h4>Chow-chow</h4>
                        <MdClear className='mdClear' size={24} color='#000' opacity='0.3'/>
                    </ToastBody>
                    
                </Toast>
            </div>

        </div>
    )
}
export default Adoptions