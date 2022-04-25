import React from 'react';
import { useRouter } from 'next/router';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
            <div className="ml-8 mb-12 mt-28 mr-4 text-6xl font-semibold text-white pb-3">
   
   <Typist>
       Take a look at our <span className="transition duration-500 text-transparent
                 bg-clip-text 
                 bg-gradient-to-r from-emerald-300 
                 to-blue-400 font-semibold">{" latest blogs"}</span>
     </Typist>
   </div>
   <div className="ml-8 mr-14 text-xl text-gray-400 pb-3">
     To make sure as many people as possible are involved in the Artificial Intelligence world,
     we consistently upload blogs to this website to answer common questions more extensively. If you wish
     to be part of this project, either to add blogs, change them or extend them, don't hesitate to contact us! 
   </div>

      <div className="grid mt-12 ml-8 grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 mt-8 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}