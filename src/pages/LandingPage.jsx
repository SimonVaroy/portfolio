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
	<NavLink className={"left-links"} to="/" activeClassName="selected"><span className="link">{Name}</span></NavLink>
        <NavLink className={"links"} to="/ommeg" activeClassName="selected"><span className="link">Om meg</span></NavLink>
        <NavLink className={"links"} to="/prosjekter" activeClassName="selected"><span className="link">Prosjekter</span></NavLink>
	<a className={"links"} href="https://simonvaroy.xyz/CV.pdf" target="_blank" rel="noopener noreferrer"><span className="link">CV</span></a>
        <NavLink className={"links"} to="/kontakt" activeClassName="selected"><span className="link">Kontakt</span></NavLink>
      </nav>

      <Routes>
        <Route path="*" element={<DefaultPage />} />
        <Route path="/" element={<DefaultPage />} />
        <Route path="/ommeg" element={<About />} />
        <Route path="/prosjekter" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </>

  );
}

export default LandingPage;
