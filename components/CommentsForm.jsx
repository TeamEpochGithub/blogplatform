import React, { useRef, useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handlePostSubmission = () => {
    setError(false);

    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;    
    const {checked: storeData} = storeDataEl.current;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      );
  };

  return (
    <div className="scale-90 bg-transparent opacity-80 -mt-4 border border-gray-500  rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl text-white mb-8 font-semibold border-b pb-4">Any comments?</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
      <textarea ref={commentEl}
                className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-transparent text-gray-100 border border-gray-500  rounded-lg" 
                name="comment" 
                placeholder="Comment" />
  
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input type="text" 
              ref={nameEl}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-transparent text-gray-200 border border-gray-500 rounded-lg" 
              placeholder="Name" 
              name="name" />
        <input type="email"
              ref={emailEl}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-transparent text-gray-200 border border-gray-500  rounded-lg" 
              placeholder="Email" 
              name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
      <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer ml-1" htmlFor="storeData"> Save my name and email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button type="button" 
                onClick={handlePostSubmission} 
                className="transition duration-500 ease hover:bg-blue-900 inline-block bg-green-300 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                  Publish Comment
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-300">Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentsForm