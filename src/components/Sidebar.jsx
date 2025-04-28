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
          <p>Desenvolvedor Front End</p>
        </div>

        <FaLinkedin className="linkedin Icon" />
        <FaSquareXTwitter className="xwitter Icon" />
        <FaInstagram className="instagram Icon" />
      </div>

      <div className="contactContainer">
        <div className='iconText'>
        <FaDiscord className="discord Icon" />
        <p>filpo#6061 </p>
        </div>

        <div className='iconText'>
        <MdEmail className="email Icon" />
        <p>luizfilipi3246@gmail.com </p>
        </div>

        <div className='iconText'>
        <FaMagnifyingGlass className="search Icon" />
        <p>filpoix </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
