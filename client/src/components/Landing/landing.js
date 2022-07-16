import Topbar from "./Horizontal/00topbar/Topbar";
import Intro from "./Horizontal/01intro/Intro";
import Portfolio from "./Vertical/03portfolio/Portfolio";
import Works from "./Vertical/04works/Works";
import Testimonials from "./Vertical/05testimonials/Testimonials";
import Contact from "./Vertical/06contact/Contact";
import "./Home.scss";
import { useState } from "react";
import Menu from "./Vertical/00menu/Menu";

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default Landing;
