import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { PostCard, Categories, PostWidget, Footer, FeaturedPostCard, Modal} from '../components'
import {getPosts} from '../services'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import { getFeaturedPosts } from '../services';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

export default function Home( {posts} ) {

    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
  
    useEffect(() => {
      getFeaturedPosts().then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
      });
    }, []);
    
  return (
<>
    <div className="text-lg container mx-auto px-10 mb-8">
        <Head>
          <title>Epoch Blog Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className="ml-8 mt-14 mr-14 mb-4 text-center text-5xl font-bold text-white pb-3">
      <Typist>
          Take a look at our <span className="transition duration-500 text-transparent
                    bg-clip-text 
                    bg-gradient-to-r from-emerald-300 
                    to-blue-400 font-semibold">{" latest news"}</span>
        </Typist>
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {dataLoaded && featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post}/>
        ))}
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


