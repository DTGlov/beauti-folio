import React from 'react';
import Proj from '../ProjComp/Proj';
import { coinbaseProject } from '../../../data/projectDB';

function Coinbase() {
  const { title, details, tools, img, projecturl, github, icon } =
    coinbaseProject;
  return (
    <div>
      <Proj
        title={title}
        details={details}
        tools={tools}
        img={img}
        projecturl={projecturl}
        github={github}
        icon={icon}
      />
    </div>
  );
}

export default Coinbase;
