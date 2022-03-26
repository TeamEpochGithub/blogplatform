import React, {useState, useEffect} from 'react';
import Link from 'next/Link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  return (
    <div className="bg-transparent opacity-80 p-8 mb-8 pb-6">
      <h3 className="text-xl text-white mb-8 font-semibold  pb-3 border-b border-gray-500">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer text-gray-200 block mb-3 cursor-pointer hover:scale-110
                        transition duration-500 hover:text-green-600">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories