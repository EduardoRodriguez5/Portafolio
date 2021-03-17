import './App.scss';
import NavBar from "./Components/NavBar/NavBar";
import FirstComponent from "./Components/FirstComponent/FirstComponent";
import AbouteMe from './Components/AboutMe/AboutMe';
import Proyects from './Components/Proyects/Proyects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <NavBar/>
      <FirstComponent/>
      <AbouteMe/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
