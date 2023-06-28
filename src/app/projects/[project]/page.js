import { getProject } from "../../../../sanity/sanity-utils";


export default async function Project( params ){
    const slug = params.project;
    const project = await getProject(slug)
    return(

        <div>{project.name}</div>

    )
}