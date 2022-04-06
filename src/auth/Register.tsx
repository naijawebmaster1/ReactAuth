import { Link } from "react-router-dom";
import { Button } from "../partials/Button";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import swal from 'sweetalert'
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../Redux/Actions/AuthActions";
// import setUser from "../Redux/Actions/AuthActions";
import Sidebar from "../components/Sidebar"
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: any) => {
      //  alert(JSON.stringify(values, null, 2));
      setLoading(!loading);
      console.log(values);
      const fetchProducts = async (values: any) => {
        // POST request using axios with set headers
        const article = { title: 'React POST Request Example' };
        const headers = {
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
        };
        const response = await axios
          .post('https://www.giropay.xyz/api/v1/giro-app/auth/register', values, { headers })
          .then((response) => {
            setLoading(false);
            console.log(response);
            console.log("Data Loaded", response.data);
            dispatch(RegisterUser(response.data));
            swal("Great", "User Registered Successfully", "success");
            //@ts-ignore
            setTimeout(function () { navigate("/login") }, 1000);
          })
          .catch(({ err, response }: any) => {
            setLoading(false);
            console.log("Err: ", err);
            swal({
              title: "!Oops.",
              text: response.data.Error,
              icon: "warning",
            });
          });
      };
      // useEffect(() => {
      fetchProducts(values);
      // }, []);
    },
    // validationSchema: forgotPasswordSchema,
    validateOnChange: false,
  });
  const { allGig }: any = useSelector((state) => state);
  const state: any = useSelector((state) => state);
  console.log(allGig)
  console.log(state)
  return (
    <div>
      <section className="" style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>
        <div className="lg:grid grid-cols-8 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden ">
<Sidebar/>
          <div className="md:col-span-6 pt-10 bg-gray-900  text-center overflow-hidden h-screen lg:px-60 md:px-40 px-6">
            <form onSubmit={formik.handleSubmit} className="mt-50 space-y-6 bg-white md:px-16 px-6 py-16 mx-auto my-auto rounded-xl" action="#" method="POST">
              <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-blue-900 leading-normal mx-auto">Register</h1>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md -space-y-px text-left ">
                <div>
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    autoComplete="email"
                    required
                    className=" mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    autoComplete="current-password"
                    required
                    className=" mt-2 appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/login">    <a href="#" className=" text-blue-900 hover:text-indigo-500 font-semibold">
                    Login
                  </a> </Link>
                </div>
              </div>
              <div>
                <Button
                  // onClick={
                  //   handleSubmit()
                  // }
                  loadingText={"Authenticating"}
                  loading={loading}
                  text={"Register"}
                  btnType={"secondary"}
                />            </div>
            </form>
          </div>
        </div>
        {/* <section className="py-16">
        <div className="text-white text-center px-10 md:px-0">
          <p className="">RATINGS</p>
          <h1 className="text-3xl font-semibold">Our App Ratings</h1>
          <p className="mt-3 md:hidden text-gray-300">Download Boon on Android Google play store and iOS app store and trade your giftcards at lightning-fast speeds. </p>
          <p className="mt-3 hidden md:block text-gray-300">Download Boon on Android Google play store and iOS app store and trade your <br /> giftcards at lightning-fast speeds. </p>        </div>
        <div className="md:flex md:flex-wrap  overflow-hidden md:mx-16 md:px-52 text-center mt-10">
          <div className="my-2  md:w-1/2 overflow-hidden text-white mt-auto mb-auto ">
            <div className="flex-wrap justify-start py-5">
              <div className="flex-auto font-medium text-slate-900 inline">
                <img alt="" className="inline" src="./assets/icons/play.svg" />
              </div>
              <div className="text-tiny font-medium text-slate-400 inline">
                <p className='inline text-white ml-8'>Play Store</p>
              </div>
            </div>
            <div>
              <img alt="" className="inline" src="./assets/icons/Frame.svg" />
            </div>
            <div className="flex flex-wrap md:justify-start my-10 bg-blue-light rounded-xl mx-auto md:mx-10 p-2 max-w-fit justify-center cursor-pointer md:hover:scale-105 hover:border-white transform transition duration-300 hover:bg-transparent hover:border hover:text-white hover:bg-blue-900">
              <div className="w-1/5 overflow-hidden">
                <img alt="" className="inline mt-2" src="./assets/icons/playstore1.svg" />
              </div>
              <div className="w-4/5 overflow-hidden">
                <div className="text-tiny font-medium text-slate-400 inline">
                  <p className='text-left text-white ml-4 '>Download on Play Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2  md:w-1/2 overflow-hidden text-white md:px-20 mt-auto mb-auto ">
            <div className="flex-wrap justify-start py-5">
              <div className="flex-auto font-medium text-slate-900 inline">
                <img alt="" className="inline" src="./assets/icons/apple.svg" />
              </div>
              <div className="text-tiny font-medium text-slate-400 inline">
                <p className='inline text-white ml-8'>Apple Store</p>
              </div>
            </div>
            <div>
              <img alt="" className="inline" src="./assets/icons/Frame.svg" />
            </div>
            <div className="flex flex-wrap md:justify-start my-10 bg-blue-light rounded-xl mx-auto md:mx-10 p-2 max-w-fit justify-center cursor-pointer md:hover:scale-105 hover:border-white transform transition duration-300 hover:bg-transparent hover:border hover:text-white hover:bg-blue-900">
              <div className="w-1/5 overflow-hidden">
                <img alt="" className="inline mt-2" src="./assets/icons/applestore1.svg" />
              </div>
              <div className="w-4/5 overflow-hidden">
                <div className="text-tiny font-medium text-slate-400 inline">
                  <p className='text-left text-white ml-4 '>Download on Apple Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </section>
    </div>
  )
}
export default Register