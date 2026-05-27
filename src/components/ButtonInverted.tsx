import styles from '../styles/Button.module.css'

export default function ({text}) {
    return(
        <button className={styles.inverted}>{text}</button>
    )
}