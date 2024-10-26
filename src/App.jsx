import styles from  './App.module.css';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Comment } from './components/Comment';
import'./global.css';

function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <Post/>
    </div>
    </div>
  );
}

export default App;