import { useState } from "react";
import aboutImg from "../assets/about-temp.jpg";
import "./About.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-title" data-aos="fade-up">
          <h2>
            About <span>MySelf</span>
          </h2>
          <p>I am a Passionate Web Developer building modern experiences.</p>
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={aboutImg} alt="About" />
          </div>

          <div className="about-text" data-aos="fade-left">
            <h3>
              Hello, I am <span>Adarsh Kumar Prajapati</span>
            </h3>

            <p>
              I am a passionate MERN Stack Developer who enjoys building modern
              and scalable web applications.
            </p>

            {/* hidden content */}

            {showMore && (
              <>
                <p>
                  I specialize in building full-stack applications using
                  MongoDB, Express.js, React.js and Node.js.
                </p>

                <p>
                  I am proficient in HTML, CSS and JavaScript and focus on
                  writing clean and efficient code for modern web applications.
                </p>

                <p>
                  I have developed several projects including a real-time chat
                  application, an e-commerce website and a Zoho clone. Through
                  these projects I gained strong experience in authentication
                  systems, REST APIs and database management.
                </p>

                <p>
                  My goal is to continuously improve my development skills and
                  build impactful digital products that solve real-world
                  problems.
                </p>
              </>
            )}

            {/* button */}

            <button
              className="about-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Know More About Me"}
            </button>

            <div className="about-info">
              <p>
                <strong>Name:</strong> Adarsh Kumar Prajapati
              </p>
              <p>
                <strong>Age:</strong> 19
              </p>
              <p>
                <strong>Role:</strong> MERN Stack Developer
              </p>
              <p>
                <strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js,
                Express, MongoDB
              </p>
              <p>
                <strong>Location:</strong> India
              </p>
              <p>
                <strong>Email:</strong> adarsh122004@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
