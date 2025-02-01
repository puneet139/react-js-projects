import reactImg from './assets/react-core-concepts.png'
import Header from './components/Header.jsx';
import Examples from './components/Examples.jsx'
import CoreConcepts from './components/CoreConcepts';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
