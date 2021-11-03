import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jen Liu</h2>
        <p><a href="mailto:ye.liu441@duke.edu">ye.liu441@duke.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jen.
        I am a software developer, a structural engineer, and a railroad researcher. <br />
        I received my M.S degree from University of Illinois at Urbana-Champaign, where I was a <a href="https://railtec.illinois.edu/member/kaijun-zhu/" target="_blank" rel="noopener noreferrer">Research Assistant </a> and was advised by <a href="https://railtec.illinois.edu/member/j-riley-edwards/" target="_blank" rel="noopener noreferrer">Dr. Riley Edward</a> and <a href="https://sc.edu/study/colleges_schools/engineering_and_computing/faculty-staff/qian_yu.php" target="_blank" rel="noopener noreferrer">Prof. Yu Qian</a>. After graduation, I became a structural / software engineer at <a href="https://www.saifulbouquet.com/" target="_blank" rel="noopener noreferrer">Saiful Bouquet</a> and <a href="https://www.walterpmoore.com/" target="_blank" rel="noopener noreferrer">Walter P Moore</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname.includes('/about') ? <Link to="/resume" className="button">View Resume</Link> : <Link to="/about" className="button">More about Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jen Liu <Link to="/">kaijunz.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
