import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        Portfolio
      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Kalaimathi A</h1>
          <h3>
            And I'm a <span>MERN Developer</span>
          </h3>
          <p>Building scalable and user-friendly web applications.</p>

          <div className="socials">
            <a href="#">
              <i className="bx bxl-github">github</i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin">linkedin</i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram">instagram</i>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
