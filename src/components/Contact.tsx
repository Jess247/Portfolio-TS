import ButtonInverted from './ButtonInverted'
import styles from '../styles/Contact.module.css'
import { TiSocialGithub, TiSocialLinkedin   } from "react-icons/ti";
import { IoIosMail, IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin   } from "react-icons/io";




export default function Contact() {
    return(
        <section className={styles.contactContainer}>
            <div className={styles.textContent}>
                <h2>Contact me</h2>
                <p>Sounds interesting? Follow me on Social Media or write a me a message.</p>
                <ul className={styles.links}>
                    <li>
                        <a href=""><IoLogoGithub  size={30} /></a>
                    </li>
                    <li>
                        <a href=""><IoLogoLinkedin  size={30} /></a>
                        </li>
                    <li>
                        <a href=""><IoLogoWhatsapp size={30} /></a>
                    </li>
                    <li><a href=""><IoIosMail size={30} /></a></li>
                </ul>
                <form action="" className={styles.form}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" className={styles.input} />
                    <label htmlFor="msg">Message: </label>
                    <textarea name="msg" id="" className={styles.textarea}></textarea>
                    <ButtonInverted text="send"/>
                </form>
            </div>
        </section>
    )
}