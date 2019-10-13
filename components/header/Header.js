import "./header.scss"
import Link from "next/link"
import Logo from "../logo/Logo"
import NavBar from "../nav-bar/NavBar"


const Header = props => {
    //console.log(props)
    return (
        <header className='header'>
            <Link href="/">
                <div>
                    <Logo height={64} width={87}/>
                </div>
            </Link>
            {/*<NavBar/>*/}
        </header>
    )
}

export default Header