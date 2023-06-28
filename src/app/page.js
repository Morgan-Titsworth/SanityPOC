import Image from 'next/image'
import { getProjects } from '../../sanity/sanity-utils'
import Link from 'next/link'


export default async function Home() {
  const projects = await getProjects()
  return <div>{projects.map((project) => (
      <Link key={project._id} href={`/projects/${project.slug}`}>
        {project.name}
        <Image src={project.imageUrl} alt={project.name} width={250} height={100}/>
      </Link>
    )

    )}</div>
  
}
