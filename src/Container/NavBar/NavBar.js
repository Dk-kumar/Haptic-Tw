import "./NavBar.scss";

const NavBar = (props) => {
  const { navLinks, activeIndex } = props;
  const { setActive } = props;

  const handleNav = () => {
    return (
      <div className="navbar-wrapper">
        <div className="heading">
          <p className="title">
            <span>P</span>ERFICIENT
          </p>
        </div>
        <div className="nav-links">
          {navLinks.map((links, index) => {
            return (
              <nav
                onClick={() => setActive(index)}
                className={index === activeIndex ? "active-link" : ""}
                key={links.id}
              >
                {links.link}
              </nav>
            );
          })}
        </div>
      </div>
    );
  };

  return <>{handleNav()}</>;
};

export default NavBar;
