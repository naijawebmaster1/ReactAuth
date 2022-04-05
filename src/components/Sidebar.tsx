import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Button} from "../partials/Button";
import { Link } from "react-router-dom";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:col-span-2 hidden md:block bg-blue-900 overflow-hidden text-white pt-auto pb-auto px-0 h-screen">
    <img alt="" className="w-5/5 " src="img/lines/line-3.svg" />
    <img alt="" className="w-5/5 -top-1/3 relative" src="img/lines/line-4.svg" />
    <img alt="" className="w-5/5 -top-2/3 relative" src="img/lines/line-5.svg" />
  </div>
  );
}
export default Sidebar;