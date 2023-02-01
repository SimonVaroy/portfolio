import githublogo from "../images/githublogo.png";

const Projects = () => {
  return(
    <div className="projects">
      <h1 id="projectsheader">Prosjekter</h1>
      	<div className="project">
      <h2>Random Pokemon Generator</h2>
        <div className="projecttext">
          <p>Dette er ganske enkelt en side skrevet med plain HTML, CSS og Javascript som tilfeldig genererer et pokemon kort som inneholder navn, bilde, type(r) og statistikk. En API er brukt til å hente den tilfeldige pokemonen. En liveversjon av siden ligger <a href="https://simonvaroy.github.io/randompokemon/">her</a>.</p>
	<a className="githublogo" href="https://github.com/SimonVaroy/randompokemon"><img src={githublogo} alt="github logo"/></a>
	</div>
      	</div>
	<div className="project">
      <h2>Fischer random</h2>
      	<div className="projecttext">
	  <p>Dette er et simpelt script som genererer en gyldig sjakkposisjon etter Fischer Random regler. Reglene for en startposisjon er at løperne må være på motsatt farge fra hverandre og kongen må stå mellom tårnene. Scriptet flytter tilfeldig rundt på brikkene og sier seg først fornøyd når en gyldig posisjon er nådd.</p>
	</div>
	<a className="githublogo" href="https://github.com/SimonVaroy/fischerjs"><img src={githublogo} alt="github logo"/></a>
      	</div>
	<div className="project">
	<h2>Denne siden</h2>
      	<div className="projecttext">
      <p>Jeg hoster blant annet min egen <a href="https://searx.simonvaroy.xyz">søkemotor,</a> <a href="https://git.simonvaroy.xyz">git server,</a> <a href="https://cal.simonvaroy.xyz">kalender server</a>, xmpp server og e-post server. NGINX er brukt som backend for de fleste av disse.</p>
	</div>
	</div>
	</div> 
  );
};

export default Projects;
