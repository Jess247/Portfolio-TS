import styles from '../styles/Nav.module.css'

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Project', href: '#' },
    { label: 'Contact', href: '#' },
]

export default function Nav() {
    return (
        <ul className={styles.nav}>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a className={styles.link} href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
    )
}