import { createClient, groq } from "next-sanity";

export async function getProjects(){
    const client = createClient({
        projectId: 'n1fslebr',
        title: 'sanitypoc',
        dataset: 'asd',
        apiVersion: '2023-06-27',
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "imageUrl": image.asset -> url,
            "imageAlt": image.alt,
            "content": image.content,
            "imageURL": image.url,
        }`
    )
}

export async function getProject(slug){
    const client = createClient({
        projectId: 'n1fslebr',
        title: 'sanitypoc',
        dataset: 'asd',
        apiVersion: '2023-06-27',
    });
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "imageUrl": image.asset -> url,
            "imageAlt": image.alt,
            "content": image.content,
            "imageURL": image.url,
        }`,
        { slug }
    )
}
//without the [0] you need to reference the first item in the array in your pages, or wherever you're pulling the data
//const projectItems = project[0] as an example