import "./header.scss"
import Link from "next/link"
import Logo from "../logo/Logo"
import NavBar from "../nav-bar/NavBar"


const Header = props => {
    //console.log(props)  height={64} width={87}
    return (
        <header className='header'>
            <NavBar>
                <Link href="/">
                    <a>
                        <Logo device={props.device}/>
                    </a>
                </Link>
            </NavBar>
        </header>
    )
}

export default Header