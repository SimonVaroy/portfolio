// import images
import githublogo from "../images/githublogo.png";
import rsslogo from "../images/rsslogo.png";
import linkedinlogo from "../images/linkedinlogo.png";

const LogoBar = () => {
  return(
    <div className="logos">

      <div>
        <img className="logo" src={githublogo} alt="github logo"/>
      </div>

      <div>
        <img className="logo" src={linkedinlogo} alt="linkedin logo"/>
      </div>

      <div>
        <img className="logo" src={rsslogo} alt="rss logo"/>
      </div>

    </div>
  );
};

export default LogoBar
