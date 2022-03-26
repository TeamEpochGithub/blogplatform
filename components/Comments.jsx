import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="scale-90 bg-transparent opacity-80 border border-gray-500  rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold text-white border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold text-gray-300">{comment.name}</span>
                  <span className="font-semibold text-gray-300">{' - '}</span>
                  <span className="font-semibold text-gray-300">{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
                </p>
                <p className="whitespace-pre-line text-gray-200 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;