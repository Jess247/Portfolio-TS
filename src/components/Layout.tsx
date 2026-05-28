import Logo from './Logo'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className={styles.navbar}>
                <Nav />
                <Logo/>
            </div>
            <main className={styles.container}>
                {children}
            </main>
            <Footer/>
        </>
    )
}