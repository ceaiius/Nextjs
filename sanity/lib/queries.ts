import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || category match $search || author->name match $search || title match $search]{
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      id, name, slug, image, bio
    },
    views,
    description,
    category,
    image
}`);