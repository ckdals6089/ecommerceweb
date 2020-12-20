import Header from './components/Header/header.js';
import Home from './components/Home/home.js';
import './styles/master.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main-1">
        <Home />
      </main>
    </> 
  );
}

export default App;
