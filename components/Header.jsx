import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/Link';
import { getCategories } from '../services';

const Header = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
   getCategories()
        .then((newCategories) => setCategories(newCategories))
   }, []);
  return (
    <div className="container mx-auto px-10 mb-10">
        <div className="border-b w-full inline-block border-white-400 py-10">
            <div className="md:float-left block">
                <Link href="/">
                    <span className = "cursor-pointer font-bold text-5xl text-white">
                        Team Epoch
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                <Link href={`/`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            BlogPage
                        </span>                    
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header