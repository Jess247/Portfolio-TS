import Button from "./Button";

export default function Contact() {
    return(
        <section>
            <h2>Contact me</h2>
            <p>Sounds interesting? Follow me on Social Media or write a me a message.</p>
            <ul>
                <li><a href="">GH</a></li>
                <li><a href="">LI</a></li>
                <li><a href="">WA</a></li>
                <li><a href="">Email</a></li>
            </ul>
            <form action="">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" />
                <label htmlFor="msg">Message: </label>
                <textarea name="msg" id=""></textarea>
                <Button text="send"/>
            </form>
        </section>
    )
}