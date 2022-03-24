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
    <div className="bg-white opacity-80 shadow-lg shadow-stone-500/60 rounded-lg p-8 mb-8 pb-6">
      <h3 className="text-xl text-black mb-8 font-semibold  pb-3 border-b border-green-500">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer text-black block mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories