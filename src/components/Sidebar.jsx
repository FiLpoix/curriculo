import avatar from "../assets/profilePic.webp";
import { FaInstagram, FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div>
        <img src={avatar} className="profile" />
        <div className="socialText">
          <p>Desenvolvedor Front End</p>
        </div>
      </div>

      <div className="socialMediaContainer">
        <div className="iconLink">
          <FaLinkedinIn className="linkedin Icon" />
        </div>
        <div className="iconLink">
          <FaGithub className="github Icon" />
        </div>
        <div className="iconLink">
          <FaInstagram className="instagram Icon" />
        </div>
      </div>

      <div className="contactContainer">
        <div className="iconText">
          <div className="iconBg">
            <FaDiscord className="discord Icon" />
          </div>
          <p>filpo#6061 </p>
        </div>

        <div className="iconText">
          <div className="iconBg">
            <MdEmail className="email Icon" />
          </div>
          <p>luizfilipi@gmail.com </p>
        </div>

        <div className="iconText">
          <div className="iconBg">
            <FaLocationDot className="loc Icon" />
          </div>
          <p>Teresina-PI </p>
        </div>
      </div>

      <button className="downloadBtn">Download currículo</button>
    </div>
  );
};

export default Sidebar;
