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
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-6">
      <h3 className="text-xl mb-8 font-semibold  pb-3 border-b border-emerald-400">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories