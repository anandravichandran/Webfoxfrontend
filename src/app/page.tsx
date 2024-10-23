
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Client from "@/components/Clinet";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import {FloatingNav}from "@/components/FloatingNav";
// import DataHero from "@/components/DataInspection/DataHero";
// import Casestudy from "@/components/DataInspection/Casestudy";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/MovingBorder";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Hero />
        <FloatingNav navItems = {navItems}/>
        {/* <Navbar/> */}
        {/* <Grid/> */}
        <RecentProjects/>
        <Client/>
        <Experience/>
        {/* <Approach/> */}
        <Footer/>
      </div>
    </main>
  );
}