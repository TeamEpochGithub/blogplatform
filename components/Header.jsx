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
    <div className="container text-white mx-auto px-10 mb-8">
        <div className="border-b mt-4 w-full inline-block border-white py-10">
            <div className="md:float-left block">
                <Link href="/">
                <img 
                    height="150px"
                    width="150px"
                    className="ml-6 hover:scale-110"
                    src="https://images.squarespace-cdn.com/content/v1/5ef63c9ed5738e5562697e28/d28345b1-5fe6-4864-8eee-d0370c597cf1/epoch_logo_black.png?format=1500w"
                />
                </Link>
            </div>
            <div className="hidden md:float-left md:contents text-white">
            <Link href={`https://www.instagram.com/teamepoch.delft`}>
                 <img 
                height="30px"
                width="30px"
                className="md:float-right mt-4 -translate-x-6 align-middle text-black ml-4 font-semibold cursor-pointer hover:scale-110"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                />                  
                </Link>
                <Link href={`https://www.linkedin.com/company/teamepoch/`}>
                    <img 
                    height="30px"
                    width="30px"
                    className="md:float-right mt-4 scale-110 -translate-x-6 align-middle text-black ml-4 font-semibold cursor-pointer hover:scale-150"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                    />                        
                </Link>
                <Link href={`/`}>
                        <span className="md:float-right -translate-x-6  mt-4 align-middle text-xl text-c ml-4 font-semibold cursor-pointer hover:scale-110">
                            BlogPage
                        </span>                    
                </Link>
                <Link href={`/`}>
                        <span className="md:float-right -translate-x-6 mt-4 align-middle text-xl ml-4 font-semibold cursor-pointer hover:scale-110">
                            FAQ
                        </span>                    
                </Link>
                {categories.filter((category, index) => category.slug == 'news').map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right -translate-x-6 mt-4 text-xl  align-middle  ml-4 font-semibold cursor-pointer hover:scale-110">{category.name}</span></Link>
                    ))}
                <Link href={`/about`}>
                        <span className="md:float-right mt-4 align-middle -translate-x-6 text-xl  ml-4 font-semibold cursor-pointer hover:scale-110">
                            About
                        </span>                    
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header