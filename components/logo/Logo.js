import './logo.scss'

const Logo = ({device}) => {
    const height = device !== 'mobile' ?  64 : 34
    const width = device !== 'mobile' ?  87 : 50
    return (
        <img height={height} width={width} className="logo" src="../../static/logo.svg" alt='logo'/>
    )
}
export default Logo