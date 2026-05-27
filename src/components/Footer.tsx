import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <ul className={styles.linkList}>
                <li>
                    <a href="#">GH</a>
                </li>
                <li>
                    <a href="#">Impressum</a>
                </li>
                <li>
                    <a href="#">AGB</a>
                </li>
            </ul>
            <span>&copy; Jessica Singlatary</span>
        </footer>
    )
}