import styles from '../styles/Projects.module.css'
import Button from './Button'

const projects =[ 
    { img:'https://cdn.dribbble.com/userupload/47873122/file/7fe9abe6e6b2731e3b5a796114b0fc39.png?crop=0x0-2400x1800&format=webp&resize=1200x900&vertical=center', name:'Project Name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quasi'},
    { img:'https://cdn.dribbble.com/userupload/47873122/file/7fe9abe6e6b2731e3b5a796114b0fc39.png?crop=0x0-2400x1800&format=webp&resize=1200x900&vertical=center', name:'Project Name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quasi'},
    { img:'https://cdn.dribbble.com/userupload/47873122/file/7fe9abe6e6b2731e3b5a796114b0fc39.png?crop=0x0-2400x1800&format=webp&resize=1200x900&vertical=center', name:'Project Name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quasi'},
    { img:'https://cdn.dribbble.com/userupload/47873122/file/7fe9abe6e6b2731e3b5a796114b0fc39.png?crop=0x0-2400x1800&format=webp&resize=1200x900&vertical=center', name:'Project Name', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quasi'}
]

export default function Projects() {
    return(
        <section className={styles.projectContainer}>
            <h2>Projects</h2>
            {projects.map(project => (
                            <div className={styles.card}>
                                <img className={styles.img} src={project.img} width="200px" alt="" />
                                <div className='text'>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <Button text="View on Github"/>
                                </div>
                            </div>
            ))}
        </section>
    )
}

