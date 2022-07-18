import Proj from '../ProjComp/Proj';
import { instrailProject } from '../../../data/projectDB';
function Instrail() {
  const { title, details, tools, img, projecturl } = instrailProject;
  return (
    <div>
      <Proj
        title={title}
        details={details}
        tools={tools}
        img={img}
        projecturl={projecturl}
      />
    </div>
  );
}

export default Instrail;
