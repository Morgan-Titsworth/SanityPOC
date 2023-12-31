//getServerSideProps method - for changing data
import { getProject } from "../../../sanity/sanity-utils";

export default function Project({ project }) {
    
    return <div>{project.name} asdasd</div>
}

export async function getServerSideProps({ params }) {
    try {
        const project = await getProject(params.project);

        // Check if project is not undefined or null
        if (!project) {
            throw new Error('No project found');
        }

        return { props: { project } }
    } catch (error) {
        console.error('Error fetching project:', error);

        // Returning a 404 page if there's an error
        return { notFound: true };
    }
}
//getStaticPaths & getStaticProps method - for unchanging data

// import { getProject, getProjects } from "../../../sanity/sanity-utils";

// export default function Project({ project }) {
//     console.log(project[0].name); // Check the project data
//     const projectItems = project[0]
//     return <div>{projectItems.name}asdasd</div>
// }

// export async function getStaticPaths() {
//     const projects = await getProjects();

//     const paths = projects.map((project) => ({
//         params: { project: project.slug },
//     }));

//     console.log(paths); // Check the generated paths

//     return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params }) {
//     const project = await getProject(params.project);

//     console.log(project); // Check the fetched project

//     if (!project) {
//         return { notFound: true };
//     }

//     return { props: { project } }
// }