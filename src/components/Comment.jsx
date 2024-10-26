import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment (){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder = {false} src="https://avatars.githubusercontent.com/u/123769840?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Tesin</strong>
                            <time title='26 de Outubro ás 19:00' dateTime='2024-10-26 19:00:12'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>MUITOOO BOMM</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}