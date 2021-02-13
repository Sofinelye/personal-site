import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Kaijun Zhu's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">WELCOME 欢迎</Link></h2>
        </div>
      </header>
      <p> Welcome to Kaijun&apos;s burrow. Please feel free to read more <Link to="/about">about me</Link>,
        my {' '}
        <Link to="/resume">resume</Link>, or check out my {' '}
        <Link to="/projects">projects</Link>.
      </p>
      <div className="email-at">
        <p>If you like the things I built and would like further discussion, you can always email me at: <a href="mailto:kaijun.zhu0629@gmail.com">kaijun.zhu0629@gmail.com</a> </p>
      </div>
    </article>
  </Main>
);

export default Index;
