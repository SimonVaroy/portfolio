// import images
import githublogo from "../images/githublogo.png";
import rsslogo from "../images/rsslogo.png";
import linkedinlogo from "../images/linkedinlogo.png";

const LogoBar = () => {
  return(
    <div className="logos">

      <div>
        <a href="https://github.com/SimonVaroy"><img className="logo" src={githublogo} alt="github logo"/></a>
      </div>

      <div>
	<a href="https://www.linkedin.com/in/simon-nikolai-var%C3%B8y-777750263/"><img className="logo" src={linkedinlogo} alt="linkedin logo"/></a>
      </div>

      <div>
        <img className="logo" src={rsslogo} alt="rss logo"/>
      </div>

    </div>
  );
};

export default LogoBar
