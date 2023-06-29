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
        groq`*[_type == "project" && slug.current == $slug]{
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