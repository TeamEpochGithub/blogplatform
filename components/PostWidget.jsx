import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/Link';

import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ( {categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug])
  console.log(relatedPosts)

  return (
    <div className="bg-white opacity-80 shadow-lg shadow-stone-500/60 rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 text-black font-semibold border-b border-b border-black pb-3">
        {slug ? 'Related Posts' : ' Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none"> 
              <img 
                alt={post.title}
                height="60px"
                width="60px"
                className="align-middle rounded-full "
                src={post.featuredImage.url}
              />
          </div>
          <div className="flex-grow text-black  ml-4">
            <p className="text-black font-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md text-black">
              {post.title}
            </Link>
            </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget