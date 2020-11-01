import styles from './logo.module.scss'

const Logo = () => {
    const height = 34
    const width =  50
    return (
        <img height={height} width={width} className={styles.logo} src="../../static/logo.svg" alt='logo'/>
    )
}
export default Logo