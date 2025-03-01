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

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == 'startup' && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    author -> {
      id, name, slug, username, image, bio
    },
    views,
    description,
    category,
    image,
    pitch
}`)

export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == 'startup' && _id == $id][0]{
      _id, views
  }`);