import React, { useState } from 'react'
import './Header.css'

import { 
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } 
    from 'reactstrap'

const Header = props => {

    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)

    return(
        <div className='header-container'>
            <Navbar light expand="md">
                <NavbarBrand href="/" className="mr-auto">DOGHUB</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/breeds">Raças</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header