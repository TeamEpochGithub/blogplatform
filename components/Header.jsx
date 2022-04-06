import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';


const Header = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
   getCategories()
        .then((newCategories) => setCategories(newCategories))
   }, []);
  return (
    <div className="container text-white mx-auto px-10 mb-8">
        <div className="mt-4 w-full inline-block  py-8">
            <div className="md:float-left block">
                <Link href="/">
                <img 
                    height={150}
                    width={150}
                    className="ml-6 hover:scale-110 transition duration-500"
                    src="./epochwhite.png"
                    //src="https://images.squarespace-cdn.com/content/v1/5ef63c9ed5738e5562697e28/d28345b1-5fe6-4864-8eee-d0370c597cf1/epoch_logo_white.png?format=1500w"
                />
                </Link>
            </div>
            
            <div className="hidden space-x-8 md:contents text-gray-500">
            <Link href={`https://www.instagram.com/teamepoch.delft`}>
                 <img 
                height="30px"
                width="30px"
                className="md:float-right mt-4 -translate-x-6 align-middle ml-4 font-semibold cursor-pointer hover:scale-110
                transition duration-500"
                src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                />                  
                </Link>
                <Link href={`https://www.linkedin.com/company/teamepoch/`}>
                    <img 
                    height="30px"
                    width="30px"
                    className="md:float-right mt-4 -translate-x-6 align-middle ml-4 font-semibold cursor-pointer hover:scale-110
                    transition duration-500"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                    />                        
                </Link>
                <Link href={`/faq`}>
                    <span className="md:float-right -translate-x-6 mt-4 align-middle text-xl font-semibold cursor-pointer hover:scale-110
                    font-semibold transition duration-500 hover:text-transparent
                    hover:bg-clip-text 
                    bg-gradient-to-r hover:from-emerald-300 
                    hover:to-blue-400 hover:font-semibold">
                        FAQ
                    </span>                    
                </Link>
                <Link href={`/news`}>
                        <span className="md:float-right -translate-x-6 mt-4 align-middle text-xl font-semibold cursor-pointer hover:scale-110
                        font-semibold transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-400  hover:font-semibold">
                            News
                        </span>                    
                </Link>
                <Link href={`/blogpage`}>
                        <span className="md:float-right -translate-x-6  mt-4 align-middle text-xl font-semibold cursor-pointer hover:scale-110
                        transition duration-500 hover:text-transparent
                        hover:bg-clip-text 
                        bg-gradient-to-r hover:from-emerald-300 
                        hover:to-blue-400 hover:font-semibold text-4xl font-semibold">
                            BlogPage
                        </span>                    
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Header