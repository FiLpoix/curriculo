import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <h1>Sobre</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          amet doloribus odit molestias totam provident impedit, dolor eveniet
          officia numquam quibusdam ipsam placeat tempore quae facere asperiores
          quidem sequi aut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea
          temporibus officiis aliquam. Eaque, et facilis provident corrupti
          laudantium adipisci iste ipsum ullam, quis quos dolorum consectetur
          amet cupiditate quod.
        </p>
      </div>
      <div className="tech">
        <h1>Tecnologias</h1>
        <div className="card">
          <FaHtml5 className="aboutIcon" />
          <h2>HTML5</h2>
          <p>exercitationem sit nihil consequatur harum corporis</p>
        </div>
        <div className="card">
          <IoLogoCss3 className="aboutIcon" />
          <h2>CSS3</h2>
          <p>Facilis fugiat et quas, magni iure quisquam deserunt?</p>
        </div>
        <div className="card">
          <IoLogoJavascript className="aboutIcon" />
          <h2>JavaScript</h2>
          <p>
            voluptatem rerum nihil corporis, deleniti atque harum aliquam culpa.
          </p>
        </div>
        <div className="card">
          <FaNodeJs className="aboutIcon" />
          <h2>Node.js</h2>
          <p>cumque, amet ab rerum labore veritatis quos.</p>
        </div>
        <div className="card">
          <DiMysql className="aboutIcon" />
          <h2>MySQL</h2>
          <p>
            autem, maxime quaerat aliquid amet nesciunt ipsum expedita debitis.
          </p>
        </div>
        <div className="card">
          <FaReact className="aboutIcon" />
          <h2>React</h2>
          <p>voluptatem, enim consequuntur fugiat maiores tenetur corrupti!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
