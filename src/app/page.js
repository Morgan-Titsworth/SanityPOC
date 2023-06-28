import Image from 'next/image'
import { getProjects } from '../../sanity/sanity-utils'


export default async function Home() {
  const projects = await getProjects()
  return <div>{projects.map((project) => (
      <div key={project._id}>
        {project.name}
        <Image src={project.imageUrl} alt={project.name} width={250} height={100}/>
      </div>
    )

    )}</div>
  
}
