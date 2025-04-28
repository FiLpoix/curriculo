import avatar from "../assets/profilePic.webp";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter, FaMagnifyingGlass } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <img src={avatar} className="profile" />

      <div className="socialMediaContainer">
        <div className="socialText">
          <p>teste</p>
        </div>

        <FaInstagram className="instagram Icon" />
        <FaSquareXTwitter className="xwitter Icon" />
        <FaLinkedin className="linkedin Icon" />
      </div>

      <div className="contactContainer">
        <FaDiscord className="discord Icon" />
        <p>filpo#6061 </p>
        <MdEmail className="email Icon" />
        <p>luizfilipi3246@gmail.com </p>
        <FaMagnifyingGlass className="search Icon" />
        <p>filpoix </p>
      </div>
    </div>
  );
};

export default Sidebar;
