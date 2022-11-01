
import type { NextApiRequest, NextApiResponse } from "next";

// imported from next-sanity
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";


// it's groq language 
const query = groq`*[_type == "category"] {
_id,
  ...
}`;

type Data = {
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // fetch some config from sanity (i created a file sanity.js and set configs)
  const categories = await sanityClient.fetch(query);
  console.log(categories);
  res.status(200).json({ categories });
}
