import Head from 'next/head'
import { PostCard, Categories, PostWidget} from '../components'
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections'

export default function Home( {posts} ) {
  return (
<>
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Team Epoch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="ml-16">
      <FeaturedPosts></FeaturedPosts>
      </div>
      <div className="ml-20 grid grid-cols-1 lg:grid-cols-12 gap-8"> 
      <div className="lg:col-span-7 col-span-4"> 
        {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
      </div>
        <div className="lg:col-span-4 col-span-1"> 
          <div className="lg:sticky relative top-8">
              <PostWidget /> 
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

