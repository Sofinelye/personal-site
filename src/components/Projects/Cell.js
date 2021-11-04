import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <nav className="links">
        <ul>
          {data.linkFulltext && (
            <li key="fulltext">
              <a href={`${process.env.PUBLIC_URL}${data.linkFulltext}`} target="_blank" rel="noopener noreferrer">Full-text</a>
            </li>
          )}
          {data.linkDOI && (
            <li key="DOI">
              <a href={data.linkDOI} target="_blank" rel="noopener noreferrer">DOI.org</a>
            </li>
          )}
          {data.linkDemo && (
            <li key="demo">
              <a href={data.linkDemo} target="_blank" rel="noopener noreferrer">Try it out</a>
            </li>
          )}
          {data.linkGithub && (
            <li key="github">
              <a href={data.linkGithub} target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          )}
        </ul>
      </nav>
      <a href={data.linkDemo ? data.linkDemo : data.link} target="_blank" rel="noopener noreferrer" className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        {data.desc.map((desc) => (<p>{desc}</p>))}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkFulltext: PropTypes.string,
    linkDOI: PropTypes.string,
    linkDemo: PropTypes.string,
    linkGithub: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
