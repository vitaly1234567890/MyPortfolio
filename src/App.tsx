import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {AboutMe} from "./layout/sections/about me/About me";
import {Contacts} from "./layout/sections/contacts/Contacts";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills />
            <AboutMe/>
            <Contacts/>
        </div>
    );
}

export default App;
