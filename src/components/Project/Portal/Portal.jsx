import React from 'react';
import Proj from '../ProjComp/Proj';
import { portalProject } from '../../../data/projectDB';

function Portal() {
  const { title, details, tools, img, github } = portalProject;
  return (
    <Proj
      title={title}
      details={details}
      tools={tools}
      img={img}
      github={github}
    />
  );
}

export default Portal;
