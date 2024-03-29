import { Image } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* <Image
            src="../../assets/images/logo.png"
            alt="Logo da empresa Lucena Tecnologia transformando ideias em resultados"
            width="150px"
          /> */}
          Lucena Tecnologia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/curriculum" ? "active" : ""}`} to="/curriculum">
                Sobre mim
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`} to="/portfolio">
                Portfólio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
