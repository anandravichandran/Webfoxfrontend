
import Comparision from "@/src/app/phishingwebsite/Comparision";
import PhishingClinet from "@/src/app/phishingwebsite/PhishingClinet";
import Footer from "@/src/components/Footer"
import {PhishingFloatingNav} from "@/src/app/phishingwebsite/PhishingFloatingNav";
import {navItems} from "@/src/data/index";
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
  