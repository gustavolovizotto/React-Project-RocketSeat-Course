import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                  <Avatar src="https://avatars.githubusercontent.com/u/123769840?v=4"/>
                    <div className={styles.authorInfo}>
                    <strong> Gustavo Tesin</strong>
                    <span>Web Developer</span>
                    </div>
                </div>

                <time title='26 de Outubro ás 18:00' dateTime="2024-10-26 18:00:21">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa, tudo bom?</p>
                <p>Este é meu primeiro projeto de react</p>
                <p> <a href="#"> Do curso de React da Rocketseat</a></p>
                <p> <a href="#"> #novoProjeto</a>{" "}
                    <a href="#"> #react</a>{" "}
                    <a href="#"> #rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário'/>
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}