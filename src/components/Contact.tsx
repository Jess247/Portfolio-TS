import ButtonInverted from './ButtonInverted'
import styles from '../styles/Contact.module.css'


export default function Contact() {
    return(
        <section className={styles.contactContainer}>
            <h2>Contact me</h2>
            <p>Sounds interesting? Follow me on Social Media or write a me a message.</p>
            <ul className={styles.links}>
                <li><a href="">GH</a></li>
                <li><a href="">LI</a></li>
                <li><a href="">WA</a></li>
                <li><a href="">Email</a></li>
            </ul>
            <form action="" className={styles.form}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" className={styles.input} />
                <label htmlFor="msg">Message: </label>
                <textarea name="msg" id="" className={styles.textarea}></textarea>
                <ButtonInverted text="send"/>
            </form>
        </section>
    )
}