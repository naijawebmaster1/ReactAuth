import { Link } from "react-router-dom";
import { Button } from "../partials/Button";
import {useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import {useState } from 'react'
import axios from "axios";
import swal from 'sweetalert'
import { useDispatch, useSelector } from "react-redux";
import {RegisterUser} from "../Redux/Actions/AuthActions";
import Sidebar from "../components/Sidebar"
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: any) => {
      setLoading(!loading);
      console.log(values);
      const fetchProducts = async (values:any) => {
    const article = { title: 'React POST Request Example' };
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
    const response = await axios
    .post('https://www.giropay.xyz/api/v1/giro-app/auth/login', values, { headers })
        .then((response) => {
          setLoading(false);
          console.log(response);
          console.log("Data Loaded", response.data);
          var {email} = values;
          var name   = email.substring(0, email.lastIndexOf("@"));
          response.data.profile = {
            name,
            email
          }
          dispatch(RegisterUser(response.data));
          localStorage.setItem("User", JSON.stringify(response.data));
          localStorage.setItem("Token", JSON.stringify(response.data.token));
          console.log(response.data.token)
          swal("Success", "Login Successful", "success");
                //@ts-ignore
           setTimeout(function () { navigate("/dashboard") }, 1000);
        })
        .catch(({err, response}:any) => {
          setLoading(false);
            console.log("Err: ", err);
                swal({
                title: "!Oops.",
                text: response.data.Error,
                icon: "warning",
              });
          });
          };
        fetchProducts(values);
    },
    // validationSchema: forgotPasswordSchema,
    validateOnChange: false,
  });
  const {Products}:any = useSelector((state) => state);
  const state:any = useSelector((state) => state);
  console.log(Products)
  console.log(state)
  return (
    <div>
      <section className="" style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>
        <div className="lg:grid grid-cols-8 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden ">
        <Sidebar/>
        <div className="lg:col-span-6 pt-10 bg-gray-900  text-center overflow-hidden h-screen lg:px-60 md:px-40 px-6">
            <form onSubmit={formik.handleSubmit} className="mt-50 space-y-6 bg-white md:px-16 px-6 py-16 mx-auto my-auto rounded-xl" action="#" method="POST">
            <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-blue-900 leading-normal mx-auto">Login</h1>
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
                <div className="text-sm">
                  <Link to="/register">    <span className=" cursor-pointer text-blue-900 hover:text-indigo-500 font-semibold">
                    Register
                  </span> </Link>
                </div>
                </div>
                <div className="text-sm">
                  <Link to="/forgotPassword">    <span className=" cursor-pointer text-blue-900 hover:text-indigo-500 font-semibold">
                    Forgot password?
                  </span> </Link>
                </div>
              </div>
              <div>
                <Button
                  // onClick={
                  //   handleSubmit()
                  // }
                  loadingText={"Authenticating"}
                  loading={loading}
                  text={"Login"}
                  btnType={"secondary"}
                />            </div>
            </form>
          </div>
        </div>

      </section>
    </div>
  )
}
export default Login