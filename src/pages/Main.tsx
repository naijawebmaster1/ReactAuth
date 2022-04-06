import { useState, useEffect } from "react";
import Nav from "../components/Nav"
import { Button } from "../partials/Button"
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";

function Main() {
  const [announcement, setAnnouncement] = useState(true);
  return (
    <div>
      {
        announcement === true ?
          <div className="bg-red-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div data-aos="fade-right" className="">
                  <Button
                    loadingText={"Processing"}
                    // loading={loading} 
                    text={"New!"}
                    btnType={"tertiary"}
                  />
                </div>
                <div className="-mr-2">
                  <h1 className="md:text-3xl text-base font-semibold text-white text-center">Announcing our $15 million series A funding!</h1>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-4">
                  <div className="col-span-1">
                  </div>
                  <div className="col-span-1">
                    <div>
                      <img onClick={() => setAnnouncement(false)} alt="" className=" duration-900 animate-bounce cursor-pointer w-2/5 mt-2 inline transition duration-900 ease-in-out " src="./img/cancel.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : ""
      }
      <section className="bg-blue-900" style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>
        <Nav />
        <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden  md:mx-16 mx-6">
          <div data-aos="fade-right" className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto ">
            <h1 data-aos="fade-left" className="md:text-5xl text-3xl mb-10 font-semibold mt-6 md:mt-0 md:leading-loose leading-none">Our mission is to <br /> <span className="text-red-900 underline decoration-white leading-10 inline">
              <Typewriter
                //@ts-ignore
                className="mt-6 text-lg inline"
                options={{
                  strings: ["Improve Education", "Sustain humanity"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span> </h1>
            <p className=" md:hidden text-lg text-gray-300 mt-10">We would strive to achieve that through providing education and quality health</p>
            <p className=" hidden md:block text-lg text-gray-300 mt-10">We would strive to achieve that through providing <br /> education and quality health</p>
            <div className="flex-auto flex space-x-4 justify-center md:justify-start">
              <div className="md:flex gap-8 mt-10">
                <div className="col-span-4">
                  <h1 className="text-xl font-semibold mt-10 md:mt-0">DOWNLOAD APP</h1>
                </div>
                <div className="flex justify-around mt-10 md:mt-0">
                  <div className=" text-center">
                    <img alt="" className="w-3/5 inline transition duration-900 ease-in-out " src="./img/play-store.svg" />
                  </div>
                  <div className=" text-center">
                    <img alt="" className="w-3/5 inline transition duration-900 ease-in-out " src="./img/apple-store.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <img alt="" className=" inline transition duration-900 ease-in-out " src="./img/sharath-kumar-hari-Mb2LErousEY-unsplash-1.png" />
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <div data-aos="fade-right" className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto ">
            <h1 className="md:text-5xl text-3xl font-semibold mt-10 md:mt-0 text-blue-900 leading-normal">Everything you’ll <br /> need to <span className="text-red-900 underline decoration-white leading-10">excel</span>  in life</h1>
            <p className="mt-6 text-lg text-blue-900">We’ve curated a list of valuable resources to get <br /> you going in life, all for free!</p>
            <div className="md:w-3/4">
              <div className="col-span-1 mt-10">
                <Link to="/register">
                  <Button
                    loadingText={"Processing"}
                    // loading={loading} 
                    text={"Register"}
                    btnType={"secondary"}
                  /></Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <img alt="" className=" inline " src="./img/rasheed-kemy-oqY09oVTa3k-unsplash-1.svg" />
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-10">
        <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <div data-aos="fade-left" className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto ">
            <h1 className="md:text-5xl text-3xl font-semibold mt-10 md:mt-0 text-blue-900 leading-normal">Contact Us</h1>
            <p className="mt-6 text-lg text-blue-900">Got any questions, feedback, request and complains? <br /> Reach out...</p>
            <div className="flex mt-10">
              <div className="  md:flex-wrap text-center md:text-left allign-center overflow-hidden">
                <img
                  className="h-10 w-auto mr-6"
                  src="./img/Frame-2.svg"
                  alt="Workflow"
                />
              </div>
              <div className="  md:flex-wrap text-center md:text-left allign-center overflow-hidden">
                <p className=" text-lg text-blue-900">+2348232323892</p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="  md:flex-wrap text-center md:text-left allign-center overflow-hidden">
                <img
                  className="h-10 w-auto mr-6"
                  src="./img/Frame-12.svg"
                  alt="Workflow"
                />
              </div>
              <div className="  md:flex-wrap text-center md:text-left allign-center overflow-hidden">
                <p className=" text-lg text-blue-900">contact@us.com</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <img alt="" className=" inline transition duration-900 ease-in-out " src="./img/undraw_calling_e_mgft-1.svg" />
          </div>
        </div>
      </section>
      <section data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="bg-blue-900 py-10">
        <div className="md:grid grid-cols-4 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <img
            className="h-10 w-auto"
            src="./img/rodufy.svg"
            alt="Workflow"
          />
        </div>
        <div className="md:grid grid-cols-4 mt-10 gap-0 md:flex-wrap text-left md:text-left allign-left overflow-hidden mx-16">
          <div className="md:col-span-1   md:text-center overflow-hidden">
            <h1 className="text-xl font-semibold  md:mt-0 text-white leading-normal">Blog</h1>
          </div>
          <div className="md:col-span-1   md:text-center overflow-hidden">
            <h1 className="text-xl font-semibold mt-6 md:mt-0 text-white leading-normal">Privacy Policy</h1>
          </div>
          <div className="md:col-span-1   md:text-center overflow-hidden">
            <h1 className="text-xl font-semibold mt-6 md:mt-0 text-white leading-normal">About</h1>
          </div>
          <div className="md:col-span-1   md:text-center overflow-hidden">
            <h1 className="text-xl font-semibold mt-6 md:mt-0 text-white leading-normal">Contact</h1>
          </div>
        </div>
      </section>
      <section className="bg-blue-900 pb-6">
        <div className=" md:flex-wrap text-left md:text-left allign-left overflow-hidden mx-16">
          <div className="flex md:justify-center md:col-span-1 px-auto text-center overflow-hidden">
            <h1 className="text-sm mt-6 md:mt-0 text-white">Privacy Policy</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;