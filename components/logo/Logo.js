import './logo.scss'

const Logo = ({height, width}) => {
    return (
        <img height={height} width={width} className="logo" src="../../static/logo.svg" alt='logo'/>
    )
}
export default Logo