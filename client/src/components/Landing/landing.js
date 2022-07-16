import Topbar from "./topbar/Topbar";
import Intro from "./intro/Intro";
import Portfolio from "./portfolio/Portfolio";
import Works from "./works/Works";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import "./Home.scss";
import { useState } from "react";
import Menu from "./menu/Menu";

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
