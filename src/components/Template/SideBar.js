import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const about = (
  <section className="blurb">
    <h2>About</h2>
    <p>Hi, I&apos;m Jen.
      Problem solver, risk taker, learner, yogi, and minimalist at heart.
    </p>
    <ul className="actions">
      <li>
        <Link to="/about" className="button">More about Me</Link>
      </li>
    </ul>
  </section>
);

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

    {!window.location.pathname.includes('/about') && about}

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jen Liu <Link to="/">JenLiu.Net</Link></p>
    </section>
  </section>
);

export default SideBar;
