import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Nav from "../components/Nav"
import { Button } from "../partials/Button"
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState(true);
  return (
    <div>
      {
        announcement == true ?
          <div className="bg-red-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="">
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
        <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <div className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto ">
            <h1 className="text-5xl mb-10 font-semibold mt-6 md:mt-0 leading-loose">Our mission is to <br /> <span className="text-red-900 underline decoration-white leading-10 inline">
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
            <p className=" text-lg text-gray-300 mt-10">We would strive to achieve that through providing <br /> education and quality health</p>
            <div className="flex-auto flex space-x-4 justify-center md:justify-start">
              <div className="grid grid-cols-12 gap-8 mt-10">
                <div className="col-span-4">
                  <h1 className="text-xl font-semibold mt-10 md:mt-0">DOWNLOAD
                    APP</h1>
                </div>
                <div className="col-span-4 text-center">
                  <img alt="" className="w-3/5 inline transition duration-900 ease-in-out " src="./img/play-store.svg" />
                </div>
                <div className="col-span-4 text-center">
                  <img alt="" className="w-3/5 inline transition duration-900 ease-in-out " src="./img/apple-store.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <img alt="" className=" inline transition duration-900 ease-in-out " src="./img/sharath-kumar-hari-Mb2LErousEY-unsplash-1.svg" />
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
      <section className="bg-white py-10">
        <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <div className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto ">
            <h1 className="text-5xl font-semibold mt-10 md:mt-0 text-blue-900 leading-normal">Everything you’ll <br /> need to <span className="text-red-900 underline decoration-white leading-10">excel</span>  in life</h1>
            <p className="mt-6 text-lg text-blue-900">We’ve curated a list of valuable resources to get <br /> you going in life, all for free!</p>
            {/* <Typewriter 
            //@ts-ignore
            className="mt-6 text-lg"
                            options={{
                                strings: ["Boon helps you trade giftcards with ease and sends your commission straight to your bank account.", "Boon helps you trade giftcards with ease and sends your commission straight to your bank account."],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
            <div className="flex-auto flex space-x-4 justify-center md:justify-start">
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
            <img alt="" className=" inline transition duration-900 ease-in-out " src="./img/rasheed-kemy-oqY09oVTa3k-unsplash-1.svg" />
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
      <section className="bg-gray-900 py-10">
        <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <div className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto ">
            <h1 className="text-5xl font-semibold mt-10 md:mt-0 text-blue-900 leading-normal">Contact Us</h1>
            <p className="mt-6 text-lg text-blue-900">Got any questions, feedback, request and complains? <br /> Reach out...</p>
            {/* <Typewriter 
            //@ts-ignore
            className="mt-6 text-lg"
                            options={{
                                strings: ["Boon helps you trade giftcards with ease and sends your commission straight to your bank account.", "Boon helps you trade giftcards with ease and sends your commission straight to your bank account."],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
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
      <section className="bg-blue-900 py-10">
        <div className="md:grid grid-cols-4 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden mx-16">
          <img
            className="h-10 w-auto"
            src="./img/rodufy.svg"
            alt="Workflow"
          />
        </div>
        <div className="md:grid grid-cols-4 gap-0 md:flex-wrap text-left md:text-left allign-left overflow-hidden mx-16">
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-white leading-normal">Blog</h1>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-white leading-normal">Privacy Policy</h1>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-white leading-normal">About</h1>
          </div>
          <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-white leading-normal">Contact</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;