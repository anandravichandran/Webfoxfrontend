import Image from "next/image";
import DataHero from "@/app/datainspection/DataHero"
import {DataFloatingNav}  from "@/app/datainspection/DataFloatingNav";
import { FaHome } from "react-icons/fa";
// import Grid from "../components/Grid";
import styles from "@/app/datainspection/data/style";
import {navItems} from "@/app/datainspection/data/index";
import InspectionClient from "@/app/datainspection/InspectionClient";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
// import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <DataHero />
        <DataFloatingNav navItems = {navItems}/>
        <Billing/>
        <InspectionClient/>
        <CardDeal/>
        {/* <Experience/> */}
        <Approach/>
        <Footer/>
       
        
      </div>
    </main>
  );
}
