import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  return (
    <div className="text-lg bg-transparent opacity-80 p-8 -mt-16 mb-8 pb-6">
      <h3 className="text-xl text-white mb-8 font-semibold  pb-3 border-b border-gray-500">
        Categories
      </h3>
      {categories.filter((category) => (category.slug != 'news')).map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="text-lg cursor-pointer text-gray-200 block mb-3 cursor-pointer hover:scale-110
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-400
                        hover:font-semibold">
            {category.name}
          </span>
        </Link>
      ))}
      <Link href={`/news`}>
          <span className="text-lg cursor-pointer text-gray-200 block mb-3 cursor-pointer hover:scale-110
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-400
                        hover:font-semibold">
            News
          </span>
        </Link>
    </div>
  )
}

export default Categories