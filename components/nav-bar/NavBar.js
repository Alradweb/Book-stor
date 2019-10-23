import './nav-bar.scss'


import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import MenuIcon from "../icons/MenuIcon"

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = (toggle) => {

        setCollapsed(toggle);
    }

    return (

            <Navbar color="transparent" dark>
                {props.children}
                {/*<NavbarToggler onClick={toggleNavbar} className="" />*/}
                <button onClick={() =>toggleNavbar(!collapsed)} className='menu-button'><MenuIcon open={!collapsed}/></button>
                <Collapse isOpen={!collapsed} navbar className='menu-open'>
                    <div className='menu-popup'>
                        {/*<button onClick={() =>toggleNavbar(true)} className='menu-button'><MenuIcon/></button>*/}
                        <Nav navbar className={'justify-content-end'}>
                            <NavItem>
                                <NavLink href="/cart">Cart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Collapse>
            </Navbar>
    );
}

export default NavBar
