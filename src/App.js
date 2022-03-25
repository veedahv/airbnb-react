import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Activities />
      </main>
    </div>
  );
}

export default App;
