import styles from '../styles/Hero.module.css'
import Button from './Button'

export default function Hero() {
    return(
        <section className={styles.heroContainer}>
            <div className={styles.textContent}>
                <h2 className={styles.alignLeft}>Hi, I'm Jess!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid libero? Autem nulla, reprehenderit explicabo voluptas obcaecati similique? Eos qui laudantium animi esse a perferendis veritatis quas error asperiores assumenda?</p>
                <Button text="Contact me"/>
            </div>
            <div className={styles.imgContent}>
                <img className={styles.img} src="https://market-resized.envatousercontent.com/themeforest.net/files/804629604/cover-brave.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=3d5bd2898c7a8392e6fc0e572198e0225cf3b956ac54db2140af5fa64d0c4ba0" alt="" />
            </div>
        </section>
    )
}