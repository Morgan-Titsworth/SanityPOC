import Image from 'next/image'
import { getProjects } from '../../sanity/sanity-utils'
import Link from 'next/link'


export default async function Home() {
  const projects = await getProjects()
  return <div>{projects.map((thing) => (
      <Link key={thing._id} href={`/projects/${thing.slug}`}>
        {thing.name}
        <Image src={thing.imageUrl} alt={thing.name} width={250} height={100}/>
      </Link>
    )

    )}</div>
  
}
