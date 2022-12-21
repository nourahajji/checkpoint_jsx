
import './App.css';
import About from './components/About';
import Formulaire from './components/Formulaire';
import Mur from './components/Mur';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Profil from './components/profil';
import Publication from './components/Publication';
import Nou from './Nou';

function App() {
  return (
    <div>
      <Navigation/>
      <Publication/>
      <Navbar/>
      <Profil/>
      <Formulaire/>
      <Mur/>
      <Nou/>
      <About/>

    </div>
  );
}

export default App;
