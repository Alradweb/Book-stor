import styles from './logo.module.scss'

const Logo = ({device}) => {
    //const height = device !== 'mobile' ?  64 : 34 TODO
    const height = 34
    //const width = device !== 'mobile' ?  87 : 50
    const width =  50

    return (
        <img height={height} width={width} className={styles.logo} src="../../static/logo.svg" alt='logo'/>
    )
}
export default Logo