import './App.css';
import {Skills} from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Aside from "./components/Aside/Aside";
import Contacts from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {Helmet} from "react-helmet";
import {Promo} from "./components/Promo/Promo";


function App() {
    return (

        <div className="App">
            <Helmet>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700&display=swap');
                </style>
            </Helmet>
            <Promo/>
            <Skills/>
            <Works/>
            <Aside/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
