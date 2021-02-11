import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>CSS3</li>
          <li>HTML5</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Angular 2+</li>
          <li>React.js</li>
          <li>Material-ui</li>
          <li>Bootstrap</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Git & Github</li>
          <li>Bitbucket</li>
          <li>Jenkins</li>
          <li>Webpack</li>
        </div>
      </div>
    </div>
  );
};

export default About;