import styles from '../styles/Article.module.css'

export default function Article() {
    return(
        <article className={styles.articleContainer}>
            <h2 className={styles.heading}>About me</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, quis culpa? Deserunt quod, ad, minima officia ex alias dolorem consectetur placeat facere eius iste consequuntur dignissimos aliquam magnam corrupti, ipsam nihil quisquam doloribus libero! Fugit, ipsa cumque quasi reprehenderit ullam voluptates sit asperiores dolor? Explicabo magni soluta minima ex, consectetur optio repellat porro! Modi ratione architecto rem eos sequi error voluptatem beatae cupiditate labore.</p>
            <img className={styles.img} src="https://plus.unsplash.com/premium_photo-1738592736106-a17b897c0ab1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>Maxime facere necessitatibus laudantium totam tempora architecto inventore adipisci, animi eos ullam placeat rem illum sapiente, provident fugit amet? Hic, quia ipsam ducimus odio necessitatibus totam repellendus suscipit, dolorem accusamus voluptatibus magni in deserunt aut repellat.</p>

           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, quis culpa? Deserunt quod, ad, minima officia ex alias dolorem consectetur placeat facere eius iste consequuntur dignissimos aliquam magnam corrupti, ipsam nihil quisquam doloribus libero! Fugit, ipsa cumque quasi reprehenderit ullam voluptates sit asperiores dolor? Explicabo magni soluta minima ex, consectetur optio repellat porro! Modi ratione architecto rem eos sequi error voluptatem beatae cupiditate labore.</p>
        </article>
    )
}