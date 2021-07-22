import React from "react";
import Proj from "../ProjComp/Proj";
import { secondProject } from "../../../data/projectDB";

function Second() {
  const { title, details, tools, img, projecturl, github, icon } = secondProject;
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

export default Second;
