import Head from 'next/head'
import { PostCard, Categories, PostWidget, Footer} from '../components'
import {getPosts, getNotNewsPost, getCategories} from '../services'
import { FeaturedPosts } from '../sections'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import React, {useState, useEffect} from 'react';
import postcss from 'postcss';
import Link from 'next/link';

export default function Home( {posts} ) {

  const filtration = (post) => { 
    const categories = Array.from(post.node.categories)
    const boolean =  categories.some(cat => cat.slug == 'news');
    return !boolean;
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
      
  return (
<>
    <div className="text-lg container mx-auto px-10 mb-8">
        <Head>
          <title>Epoch Blog Page</title>
          <link rel="icon" href="/iconBrowser.png" />
        </Head>
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
      <div className="ml-8 mr-14 mt-8 text-xl  text-gray-400 pb-3">
        Sort by categories:
      </div>
      <div class="ml-8 flex flex-wrap lg:col-span-10">
        {categories.filter((category) => (category.slug != 'news')).map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <label class="hover:translate-y-1 border-dotted border-2 border-sky-300 relative mr-4 block h-auto w-auto cursor-pointer rounded-full px-6 
              py-3 transition" >
          <span className="text-xl cursor-pointer text-gray-400 block cursor-pointer hover:scale-110
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-400
                        hover:font-semibold
                        ">
            {category.name}
          </span>
      </label>

        </Link>
      ))}
      <Link href={`/news`}>
            <label class="hover:translate-y-1 text-center border-dotted border-2 border-sky-300 relative mr-4 block h-auto w-auto cursor-pointer rounded-full px-6 
              py-3 transition" >
          <span className="text-xl cursor-pointer text-gray-400 block cursor-pointer hover:scale-110
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-400
                        hover:font-semibold">
            News
          </span>
      </label>

        </Link>
      </div>
      <div className="ml-16 grid grid-cols-1 lg:grid-cols-12 gap-8"> 
      <div className="mt-20 lg:col-span-7 col-span-6 scale-x-110"> 
        {posts.filter((post) => filtration(post)).map((post) => <PostCard post={post.node} key={post.title} />)}
      </div>
        <div className="lg:col-span-4 col-span-4"> 
          <div className="mt-20 lg:sticky relative top-8 -translate-y-8 translate-x-14">
              <PostWidget/> 
              <Categories />
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {posts}
  }
}


