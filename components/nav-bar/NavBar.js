import Fade from 'react-reveal/Fade'
import Spin from 'react-reveal/Spin'
import React, {useState, useContext} from 'react'
import {useRouter} from 'next/router'
import {Collapse, Navbar, Nav, NavItem} from 'reactstrap'
import MenuIcon from "../icons/MenuIcon"
import HomeIcon from "../icons/HomeIcon"
import ListIcon from "../icons/ListIcon"
import CartImg from '../icons/CartImg'
import CartIcon from "../icons/CartIcon"
import {CartContext} from '../../context/CartContext'
import Link from "next/link"
import styles from './nav-bar.module.scss'

const routes = [
    {
        href: '/', name: 'Домой', id: 1, icon: <HomeIcon/>
    },
    {
        href: '/list', name: 'Список книг', id: 2, icon: <ListIcon/>
    },
    {
        href: '/cart', name: 'Корзина', id: 3, icon: <CartIcon/>
    }

]

function ActiveLink({children, href, toggleNavbar}) {
    const router = useRouter()
    const matched = router.pathname === href
    const baseClass = styles.menu_link_base
    const classes = []
    classes.push(baseClass)
    if (matched) {
        const activeClass = styles.menu_link_active
        classes.push(activeClass)
    } else {
        const menuLink = styles.menu_link
        classes.push(menuLink)
    }
    const handleClick = ev => {
        ev.preventDefault()
        if (matched) toggleNavbar(true)
        router.push(href)
    }
    return (
        <NavItem className={styles.menu_item}>
            <a className={classes.join(' ')} href={href} onClick={handleClick}>
                {children}
            </a>
        </NavItem>
    )
}

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const {cartItems} = useContext(CartContext)
    const toggleNavbar = (toggle) => {
        setCollapsed(toggle)
    }
    console.log('STYLES---', styles)
    return (
        <Navbar color="transparent" dark>
            {props.children}
            <div className={styles.menu_cart}>
                <b>{cartItems.length}</b>
                <Link href='/cart'>
                    <a>
                        <CartImg/>
                    </a>
                </Link>
            </div>
            <Spin when={!collapsed}>
                <button onClick={() => toggleNavbar(!collapsed)} className={styles.menu_button}>
                    <MenuIcon open={!collapsed}/>
                </button>
            </Spin>
            <Collapse isOpen={!collapsed} navbar className={styles.menu_open}>
                <Fade top when={!collapsed}>
                    <div className={styles.menu_popup}>
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
