import { Link } from "react-router-dom";
import { Button } from "../partials/Button";
import { Formik, Field, Form, useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react'
import React, { useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useDispatch, useSelector } from "react-redux";
import setProducts from "../Redux/Actions/ProductsActions";
import productsReducer from "../Redux/Reducers/ProductsReducers";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://www.giropay.xyz/api/v1/giro-app/products")
      .then(response => {
        console.log("Data Loaded", response.data);
        dispatch(setProducts(response.data));
        // swal("Great", "All Products Were Fetched Successfully", "success");
      })
      .catch((err) => {
        console.log("Err: ", err);
        swal({
          title: "!Oops.",
          text: "An Error Occured While Loading Data. Reload Page",
          icon: "warning",
        });
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const { Products, User }: any = useSelector((state) => state);
  const state: any = useSelector((state) => state);
  console.log(state);
  const allProducts = Products.Products.data;
  let UserName: any = "false";
  UserName = localStorage.getItem("User")

  return (
    <div>
      <div>
        <section className="bg-blue-900 py-10">
          <div className="md:grid grid-cols-4 gap-0 md:flex-wrap text-left md:text-left allign-left overflow-hidden mx-16">
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
              <img
                className="h-10 w-auto"
                src="./img/rodufy.svg"
                alt="Workflow"
              />
            </div>
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            </div>
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            </div>
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
              <h1 className="text-3xl font-semibold mt-10 md:mt-0 text-white leading-normal">{UserName ? UserName : "User Name"}</h1>
            </div>
          </div>
          <div className="md:grid grid-cols-4 gap-0 md:flex-wrap text-left md:text-left allign-left overflow-hidden mx-16">
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            </div>
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            </div>
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
            </div>
            <div className="md:col-span-1 mt-10  text-center overflow-hidden">
                <Button
                onClick={
                  () => {
                    localStorage.setItem("User", "");
                    swal("Great", "You Logged Out Successfully", "success");
                    setTimeout(function () { navigate("/login") }, 1000);
                  }
                }
                  loadingText={"Processing"}
                  // loading={loading} 
                  text={"Logout"}
                  btnType={"secondary"}
                />           </div>
          </div>
        </section>
        <section className="bg-gray-900 py-10">
          <div className="md:grid grid-cols-2 gap-0 md:flex-wrap text-center md:text-left allign-center overflow-hidden md:mx-16 mx-6">
            {allProducts?.map((value: any, index: any) => (
              <div key={index} className="md:col-span-1 overflow-hidden text-white mt-auto mb-auto md:w-3/4 mx-auto cursor-pointer">
                <div className=" text-center md:text-left allign-center ">
                  <div className=" pt-44 my-auto mt-10 p-20 text-center overflow-hidden h-60 rounded-xl" style={{ backgroundImage: `url(${value.metaImageUrl})` }}>
                    <h1>
                      {value.description}
                    </h1>
                  </div>
                </div>
              </div>))}
          </div>
        </section>
      </div>
    </div>
  )
}
export default Dashboard;