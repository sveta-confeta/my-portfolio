import './App.css';
import {Header} from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import {Skills} from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Aside from "./components/Aside/Aside";
import Contacts from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Greeting/>
            <Skills/>
            <Works/>
            <Aside/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
