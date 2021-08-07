import React from "react";
import Proj from "../ProjComp/Proj";
import { HouseProject } from "../../../data/projectDB";

function Fourth() {
  const { title, details, tools, img, projecturl, github, icon } =
    HouseProject;
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

export default Fourth;
