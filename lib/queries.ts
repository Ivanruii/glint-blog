const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "categories": categories[]->name
`;

export const indexQuery: string = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const categoriesQuery: string = `
*[_type == "category"] {
  name
}
`;

export const postQuery: string = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery: string = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery: string = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}`;
