import './App.css';
import MoviesGrid from './components/MoviesGrid'
import styles from './modules/App.module.css'

function App() {
  return (
    <div >
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
