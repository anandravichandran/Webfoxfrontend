
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hero from "@/src/components/Hero";

import RecentProjects from "@/src/components/RecentProjects";
import { navItems } from "@/src/data";
import Client from "@/src/components/Clinet";
import Experience from "@/src/components/Experience";
import Approach from "@/src/components/Approach";
import Footer from "@/src/components/Footer";
import {FloatingNav}from "@/src/components/FloatingNav";
// import DataHero from "@/src/components/DataInspection/DataHero";
// import Casestudy from "@/src/components/DataInspection/Casestudy";
import HomeTicker from "@/src/components/HomeTicker";
import { cn } from "@/src/utils/cn";
import { Button } from "@/src/components/ui/MovingBorder";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Hero />
        <FloatingNav navItems = {navItems}/>
        <HomeTicker/>
        <RecentProjects/>
        <Client/>
        <Experience/>
        {/* <Approach/> */}
        <Footer/>
      </div>
    </main>
  );
}