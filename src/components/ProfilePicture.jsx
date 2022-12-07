import profile from "../images/profile.png"
import "../App.css";

const ProfilePicture = () => {
  return(
    <img className="profilepic" src={profile} alt="me" />
  );
};

export default ProfilePicture;
