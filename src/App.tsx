import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <NewTask />
    </div>
  );
}

export default App;
