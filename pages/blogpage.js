import Head from 'next/head'
import { PostCard, Categories, PostWidget, Footer} from '../components'
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

export default function Home( {posts} ) {
  return (
<>
    <div className="text-lg container mx-auto px-10 mb-8">
        <Head>
          <title>Epoch Blog Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className="ml-8 mt-14 mr-14 mb-12 text-center text-5xl font-bold text-white pb-3">
      <Typist>
          Take a look at our <span className="transition duration-500 text-transparent
                    bg-clip-text 
                    bg-gradient-to-r from-emerald-300 
                    to-blue-400 font-semibold">{" latest blogs"}</span>
        </Typist>
      </div>
      <div className="ml-20 grid grid-cols-1 lg:grid-cols-12 gap-8"> 
      <div className="lg:col-span-7 col-span-6 scale-x-110"> 
        {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
      </div>
        <div className="lg:col-span-4 col-span-4"> 
          <div className="lg:sticky relative top-8 -translate-y-8 translate-x-14">
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


