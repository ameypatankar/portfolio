import "./style.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/amey-patankar/"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/linkedin-icon.png`}
          alt="LinkIn-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;