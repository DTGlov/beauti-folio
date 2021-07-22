import React from "react";
import Proj from "../ProjComp/Proj";
import { thirdProject } from "../../../data/projectDB";

function Third() {
  const { title, details, tools, img, projecturl, github, icon } =
    thirdProject;
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

export default Third;
