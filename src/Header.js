import React, { Component } from 'react'

import { MdAccountBalance } from 'react-icons/md';

import './Header.css'

class Header extends Component {

    constructor() {
        super()
        this.state={
            showMe: false
        }
    }
    
    toggleMenu() {
        this.setState({
            showMe:!this.state.showMe
        })
        
    }

    render() {
        return(
            <header className='header'>
    
                <div className='menu-logo'>
                    <a href='/'><span>Dog</span>Hub</a>
                </div>
    
                <button className='btn-menu' onClick={ () => this.toggleMenu() } ><MdAccountBalance size={24} color='#FFF' /></button>
    
                { this.state.showMe ? 
    
                    <div className='menu'>
                        <nav className='menu-nav'>
                            <a className='btn-close' onClick={ () => this.toggleMenu() }>x</a>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/breed'>Raças</a></li>
                            </ul>
                        </nav>
    
                    </div>
    
                : null
                }
                
            </header>
            
        )
    }
    
}
export default Header