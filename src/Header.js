import React, { Component } from 'react'

import './Header.css'

class Header extends Component {

    constructor() {
        super()
        this.state={
            showMe: true
        }
    }
    
    menuToggle() {

        const menuSection = document.querySelector('.menu-section')

        document.body.style.overflow = this.state.showMe ? 'hidden' : 'initial'

        menuSection.classList.toggle("on", this.state.showMe)

        this.setState({
            showMe: !this.state.showMe
        })
        
    }

    render() {
        return(
            <header>
                <div className='container-header'>
                    <div className='logo'>
                        <a href='/'><span>Dog</span>Hub</a>
                    </div>
                        <div className='menu-section'>
                            <div className='menu-toggle' onClick={ () => this.menuToggle() }>
                                <div className='one'></div>
                                <div className='two'></div>
                                <div className='three'></div>
                            </div>
                            <nav>
                                <ul>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/breeds'>Raças</a></li>
                                    <li><a href='/adoptions'>Adoções</a></li>
                                </ul>
                            </nav>

                        </div>
                </div>
            </header>
        )
    }
}
export default Header