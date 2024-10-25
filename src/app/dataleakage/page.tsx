import Image from "next/image";

import {DataFloatingNav}  from "@/src/app/datainspection/DataFloatingNav";
import { FaHome } from "react-icons/fa";
// import Grid from "../components/Grid";

import {navItems} from "@/src/app/datainspection/data/index";
import DataClient from "@/src/app/dataleakage/DataClient";
import LeakageFeatures from "@/src/app/dataleakage/leakageFeatures"
import Footer from "@/src/components/Footer";
import LogoTicker from "./LogoTicker";
// import Navbar from "@/components/ui/Navbar";
import AgeTestimonials from "@/src/app/dataleakage/AgeTestimonials";
import LeakageHero from "./leakageHero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <LeakageHero />
        <DataFloatingNav navItems = {navItems}/>
        <DataClient/>
        <LeakageFeatures/>
        <LogoTicker/>
        <AgeTestimonials/>
        <Footer/>
       
        
      </div>
    </main>
  );
}
