import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/research';

const Research = () => (
  <Main
    title="Research"
    description="Learn about Jen Liu's research."
  >
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/research">Research</Link></h2>
          <p>It is always exciting to explore the unknown.</p>
        </div>
      </header>
      {data.map((research) => (
        <Cell
          data={research}
          key={research.title}
        />
      ))}
    </article>
  </Main>
);

export default Research;
