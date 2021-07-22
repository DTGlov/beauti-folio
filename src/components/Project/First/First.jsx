import React from 'react';
import Proj from '../ProjComp/Proj';
import { firstProject } from '../../../data/projectDB';

function First() {
    const { title, details, tools, img, projecturl, github,icon } = firstProject;
    return (
        <div>
            <Proj title={title} details={details} tools={tools} img={img} projecturl={projecturl} github={github} icon={ icon}/>
        </div>
    )
}

export default First
