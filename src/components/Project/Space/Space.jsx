import React from 'react';
import Proj from '../ProjComp/Proj';
import { spaceTourism } from '../../../data/projectDB';

function Space() {
  const { title, details, tools, img, projecturl, github, icon } = spaceTourism;
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

export default Space;
