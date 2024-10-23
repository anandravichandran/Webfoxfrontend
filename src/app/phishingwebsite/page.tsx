
import Comparision from "@/app/phishingwebsite/Comparision";
import PhishingClinet from "@/app/phishingwebsite/PhishingClinet";
import Footer from "@/components/Footer"
import {PhishingFloatingNav} from "@/app/phishingwebsite/PhishingFloatingNav";
import {navItems} from "@/data/index";
import HeroPhising from "./HeroPhishing";
import PhishFooter from "./PhishFooter";
export default function Home() {
    return (
     <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <HeroPhising/>
      <PhishingFloatingNav navItems = {navItems}/>
      <PhishingClinet/>
      <Comparision/>
      {/* <Experience/> */}
     <PhishFooter/>
      </div>
     </main>
    );
  }
  