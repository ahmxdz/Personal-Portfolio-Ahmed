import '../App/App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from '../Pages/HomePage/HomePage';
import AboutMe from '../Pages/AboutMe/AboutMe'
import PersonalProjects from '../Pages/PersonalProjects/PersonalProjects'
import Experience from '../Pages/Experience/Experience'
import ContactMe from '../Pages/ContactMe/ContactMe'
import NavBar from '../Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="/about-me" element={<AboutMe/> }/>
        <Route path="/personal-projects" element={<PersonalProjects/> }/>
        <Route path="/experience" element={<Experience/> }/>
        <Route path="/contact-me" element={<ContactMe/> }/>
      </Routes>
       
      
    </div>
  );
}

export default App;
