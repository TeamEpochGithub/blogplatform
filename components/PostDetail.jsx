import React from 'react';
import moment from 'moment'

const PostDetail = ( {post}) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <div className="hidden md:flex items-center justify-center mb-8 lg:mb-0 lg:w-auto mr-8 items-center">
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mb-2"
          />
          </div>
        );
      default:
        return modifiedText;
    }
  };
  
  return (
  
    <div className="text-lg translate-x-6 lg:p-8 pb-12 mb-36 -mt-12 text-justify">
      <h1 className="mb-4 text-center text-5xl text-white font-bold -mt-12">{post.title}</h1>
      <div className="hidden md:flex items-center justify-center mb-8 lg:mb-0 lg:w-auto mr-8 items-center">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-500 ml-2 font-medium text-lg">{post.author.name}</p>
       
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-8 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle text-gray-500">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
      <div className="text-white mt-8">
      {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
          </div>
      </div>
    
  )
}

export default PostDetail