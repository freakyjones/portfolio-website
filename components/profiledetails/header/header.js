function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <h1>Abhilash Pandey</h1>
        <h2>Frontend Engineer At Miho</h2>
        <p>
          I build open-source front-end libraries at Algolia and host two tech
          podcasts: Developer Experience and Entre Devs. On my spare time, I
          share what I learn on my blog and speak at tech conferences around the
          world.
        </p>
      </div>
      {/* <nav className="header__nav">
        <ul className="header__nav__navlist">
          <li className="header__nav__navlist__item">
            <p>01</p>
            <span className="header__nav__navlist__item--line"></span>
            <p>Projects</p>
          </li>
          <li className="header__nav__navlist__item">
            <p>02</p>
            <span className="header__nav__navlist__item--line"></span>
            <p>Skills</p>
          </li>
          <li className="header__nav__navlist__item">
            <p>01</p>
            <span className="header__nav__navlist__item--line"></span>
            <p>Current Learning</p>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Header;
