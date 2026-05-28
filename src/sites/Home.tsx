import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Article from "../components/Article"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import styles from '../styles/Layout.module.css'

export default function Home() {
    return (
       <Layout>
            <section className={styles.mainContainer}>
                <Hero/>
                <Article/>
                <Projects/>
                <p>Experience</p>
            </section>
            <Contact/>
       </Layout>
    )
}