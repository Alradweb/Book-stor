import './nav-bar.scss'
import Fade from 'react-reveal/Fade'
import Spin from 'react-reveal/Spin'
import React, {useState} from 'react'
//import Link from "next/link"
import {useRouter} from 'next/router'
import {Collapse, Navbar, Nav, NavItem} from 'reactstrap'
import MenuIcon from "../icons/MenuIcon"
import HomeIcon from "../icons/HomeIcon"
import ListIcon from "../icons/ListIcon"

const routes = [
    {
        href: '/', name: 'Домой', id: 1, icon: <HomeIcon/>
    },
    {
        href: '/cart', name: 'Регистрация', id: 2, icon: <HomeIcon/>
    },
    {
        href: '/list', name: 'Список книг', id: 3, icon: <ListIcon/>
    }

]

function ActiveLink({children, href, toggleNavbar}) {
    const router = useRouter()
    const matched = router.pathname === href
    const style = {
        color: matched ? 'red' : '',
    }
    const classes = ['menu-link-base']
    if( matched){
        classes.push('menu-link-active')
    }else {
        classes.push('menu-link')
    }
    const handleClick = e => {
        e.preventDefault()
        if (matched) toggleNavbar(true)
        router.push(href)
    }
    return (
        <NavItem className='menu-item'>
            <a className={classes.join(' ')} href={href} onClick={handleClick} >
                {children}
            </a>
        </NavItem>
    )
}

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = (toggle) => {
        setCollapsed(toggle)
    }

    return (

        <Navbar color="transparent" dark>
            {props.children}
            <Spin when={!collapsed}>
                <button onClick={() => toggleNavbar(!collapsed)} className='menu-button'>
                    <MenuIcon open={!collapsed}/>
                </button>
            </Spin>
            <Collapse isOpen={!collapsed} navbar className='menu-open'>
                <Fade top when={!collapsed}>
                    <div className='menu-popup'>
                        <Nav navbar className={'justify-content-end'}>
                            {
                                routes.map(({href, id, name, icon}) => {
                                    return (
                                        <ActiveLink href={href} key={id} toggleNavbar={toggleNavbar}>
                                                {icon}
                                                {name}
                                        </ActiveLink>
                                    )
                                })
                            }
                        </Nav>
                    </div>
                </Fade>
            </Collapse>
        </Navbar>
    )
}

export default NavBar
