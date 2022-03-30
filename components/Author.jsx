import React from 'react';
import Image from 'next/image';


const Author = ( {author}) => {
  return (
    <div className="scale-90 -translate-y-28 text-center p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        alt={author.name}
        height="110px"
        width="110px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-gray-400 text-ls">{author.bio}</p>
  </div>
  )
}

export default Author