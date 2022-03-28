import React from 'react';
import moment from 'moment';
import Link from 'next/Link';

const PostCard = ( {post}) => {

  console.log(post);

  return (
    <div className=" hover:scale-105 transition duration-500 bg-transparent opacity-80 border border-gray-500 rounded-lg p-0 lg:p-6 pb-12 mb-8">
      <div className="relative overflow-hidden shadow md pb-80 mb-6">
        <img 
            src ={post.featuredImage.url}
            alt = {post.title}
            className = "object-top absolute h-80 w-full object-cover"
        />
          </div>
        <h1 className="text-center text-gray-200 mb-8 cursor-pointer transition duration-400 hover:text-transparent
                    hover:bg-clip-text 
                    bg-gradient-to-r hover:from-blue-300 
                    hover:to-emerald-400  text-4xl font-semibold"> 
          <Link href={`/post/${post.slug}`}>
            {post.title}
            </Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8"> 
           <img 
            alt={post.author.name}
            height="60px"
            width="60px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
           />
          <p className="inline align-middle text-gray-500 ml-2 text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle  text-gray-500">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <p className="text-center text-lg text-gray-200 font-normal px-4 lg:px-20 mb-8">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block
                        bg-gradient-to-r from-blue-600 
                        to-emerald-500 text-2xl hover:font-semibold text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
          </Link>
    </div>
  </div>
  )
}

export default PostCard