import Head from 'next/head'
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

      
      <div className="mt-24 ml-6 mb-12 text-xl font-bold text-white" style={{ color: 'white', fontSize: 70 }}>
        <Typist>
           Don’t miss the 
          <span className="text-transparent
                    bg-clip-text 
                    bg-gradient-to-r from-emerald-300 
                    to-blue-400 font-semibold">{" news on AI"}</span>
          </Typist>
        </div>
        <div className="text-xl">
        <div  className="text-gray-400 p-0 lg:p-6 pb-12">The last decade has seen 
        great advances in artificial intelligence, we want to pave an accessible path 
          forward into what we believe will be the most disrupting field of innovation in the near and distant future. 
          But what does the near future look like?  
          <span className='text-gray-400'>{" We regularly post interesting articles here, so you can keep up too!"}</span>
        </div>
        <div  className="text-gray-400 text-xl -mb-4 p-0 mr-10 lg:p-6 pb-12">
            Take a look at our recent news:
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


