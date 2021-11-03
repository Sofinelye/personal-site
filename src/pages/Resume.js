import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   // 'Courses',
//   // 'References',
// ];

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Resume = () => (
  <Main
    title="Resume"
    description="Jen Liu's Resume. UIUC, Walter P Moore, Saiful Bouquet."
  >
    <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
      <object className="resumePDF" width="100%" style={{ maxWidth: '850px' }} type="application/pdf" data={`${PUBLIC_URL}/pdfs/resume/Kaijun Zhu-Resume.pdf?#zoom=fit&scrollbar=0&toolbar=0&navpanes=0`}>
        <p>Something went wrong, the resume cannot be loaded. Please come back later.</p>
      </object>
    </div>
  </Main>
);

export default Resume;
