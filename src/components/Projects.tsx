import styles from '../styles/Projects.module.css'
import Button from './Button'

export default function Projects() {
    return(
        <section className={styles.projectContainer}>
            <h2>Projects</h2>
            <div className={styles.card}>
                <img className={styles.img} src="https://cdn.dribbble.com/userupload/47863977/file/still-f964b533b3ac0fee5cccbbc879cdbae7.png?format=webp&resize=400x300&vertical=center" width="200px" alt="" />
                <div className='text'>
                    <h3>Project Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quasi.</p>
                    <Button text="View on Github"/>
                </div>
            </div>
        </section>
    )
}