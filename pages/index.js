import Head from 'next/head'
import { PostCard, Categories, PostWidget, Footer} from '../components'
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

export default function Home( {posts} ) {
  return (
<>
    <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Epoch Blog Page</title>
          <link rel="icon" href="/iconBrowser.png" />
        </Head>

      
      <div className="text-center mt-24 mb-0 text-xl justify-center font-bold text-white" style={{ color: 'white', fontSize: 60 }}>
        <Typist>
           Don’t miss the 
          <span className="transition duration-500 text-transparent
                    bg-clip-text 
                    bg-gradient-to-r from-emerald-300 
                    to-blue-400 font-semibold">{" news on AI"}</span>
          </Typist>
        </div>
          
        <div className="text-center text-lg justify-center">
        <div  className="text-gray-400 p-0 ml-10 mr-10 mb-6 lg:p-6 pb-12 mb-4">
            We regularly post interesting articles here, so you can keep up too!
        </div>
        <div  className="text-white text-4xl font-semibold p-0 ml-10 mr-10 lg:p-6 pb-12">
            Take a look at our recent news
        </div>
        </div>
      <FeaturedPosts></FeaturedPosts>
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


