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
        <div className="containerCard">
          <div className="card">
            <FaHtml5 className="html aboutIcon" />
            <div className="textCard">
              <h2>HTML5</h2>
              <p>
                voluptatem rerum nihil corporis, deleniti atque harum aliquam
              </p>
            </div>
          </div>
          <div className="card">
            <IoLogoCss3 className="css aboutIcon" />
            <div className="textCard">
              <h2>CSS3</h2>
              <p>
                voluptatem rerum nihil corporis, deleniti atque harum aliquam
              </p>
            </div>
          </div>
          <div className="card">
            <IoLogoJavascript className="js aboutIcon" />
            <div className="textCard">
              <h2>JavaScript</h2>
              <p>
                voluptatem rerum nihil corporis, deleniti atque harum aliquam
              </p>
            </div>
          </div>
          <div className="card">
            <FaNodeJs className=" node aboutIcon" />
            <div className="textCard">
              <h2>Node.js</h2>
              <p>
                voluptatem rerum nihil corporis, deleniti atque harum aliquam
              </p>
            </div>
          </div>
          <div className="card">
            <DiMysql className="sql aboutIcon" />
            <div className="textCard">
              <h2>MySQL</h2>
              <p>
                voluptatem rerum nihil corporis, deleniti atque harum aliquam
              </p>
            </div>
          </div>
          <div className="card">
            <FaReact className="react aboutIcon" />
            <div className="textCard">
              <h2>React</h2>
              <p>
                voluptatem rerum nihil corporis, deleniti atque harum aliquam
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='projectContainer'>
        <h1>Projetos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus
          nisi, vero explicabo autem amet incidunt hic ducimus, aspernatur
          repellendus maiores. Quod, veniam autem natus omnis sunt commodi
          mollitia facilis.
        </p>

        <button>Ver projetos</button>
      </div>
    </div>
  );
};

export default About;
