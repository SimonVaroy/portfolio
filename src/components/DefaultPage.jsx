import Name from "./Name";
import ProfilePicture from "./ProfilePicture";
import LogoBar from "./LogoBar";
import '../App.css';
// import Logos from "./Logos";

const DefaultPage = () => {
return(
  <div className="landing">
  <ProfilePicture />
  <h2>{Name}</h2>
  <h4>Fullstack utvikler og nerd</h4>
  <LogoBar />
  </div>

);
};

export default DefaultPage;
