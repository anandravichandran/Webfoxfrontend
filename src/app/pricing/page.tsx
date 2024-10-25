
import {DataFloatingNav}  from "@/src/app/datainspection/DataFloatingNav";
import {navItems} from "@/src/app/datainspection/data/index";
import PriceFooter from "@/src/app/pricing/priceFooter";
import Pricing from "./PricingHero";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <DataFloatingNav navItems = {navItems}/>
        <Pricing/>
        <PriceFooter/>
       
        
      </div>
    </main>
  );
}