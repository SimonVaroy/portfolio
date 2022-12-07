// dependency imports
import { Routes, Route, NavLink } from "react-router-dom";

// component imports
import Name from "../components/Name";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import DefaultPage from "../components/DefaultPage"


const LandingPage = () => {
  return (
    <>
      <nav>
        <NavLink className={"left-links"} to="/">{Name}</NavLink>
        <NavLink className={"links"} to="/ommeg">Om meg</NavLink>
        <NavLink className={"links"} to="/prosjekter">Prosjekter</NavLink>
        <NavLink className={"links"} to="/kontakt">Kontakt</NavLink>
      </nav>

      <Routes>
        <Route path="*" element={<DefaultPage />} />
        <Route path="/" element={<DefaultPage />} />
        <Route path="/ommeg" element={<About />} />
        <Route path="prosjekter" element={<Projects />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
    </>

  );
}

export default LandingPage;
