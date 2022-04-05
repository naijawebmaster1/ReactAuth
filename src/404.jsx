import {useState} from 'react'
import {Button} from './partials/Button'
import { Link } from "react-router-dom";
function PageNotFound() {
      const [loading, setLoading] = useState(false)
  return (
    <div>
     <div className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
    bg-blue-900
  ">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-900 text-3xl mb-10">404</h1>
            <h6 className="mb-2 text-3xl font-bold text-center text-gray-800 md:text-2xl">
              <span className="text-gold">Oops!</span> Page not found
            </h6>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
                    <div>
                    <Link to="/">              
                  <Button
                  loadingText={"Processing"}
                  // loading={loading} 
                  text={"Go Home"}
                  btnType={"secondary"}
                /></Link>
        </div>
          </div>
        </div>
      </div>
      </div>
  )
}
export default PageNotFound