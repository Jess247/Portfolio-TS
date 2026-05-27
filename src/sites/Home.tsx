import Layout from "../components/Layout"
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero"
import Article from "../components/Article"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
    return (
       <Layout>
            <main className={styles.container}>
                <Hero/>
                <Article/>
                <Projects/>
                <p>Experience</p>
                <Contact/>
            </main>
       </Layout>
    )
}