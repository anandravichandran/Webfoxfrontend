"use client";
import React from 'react'
import {InfiniteMovingCards} from '@/components/ui/InfiniteMovingCards'
import{phishingcompanies,phishingtestimonials} from "@/app/phishingwebsite/data/index"


const PhishingClient = () => {
  return (
    <section className="relative py-20" id="testimonials">
    <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center relative -mb-10">
            Case Study On
            <span className="text-purple"> Current Scenario </span>
        </h1>
    </div>
    <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 z-0'>
        <InfiniteMovingCards
            items={phishingtestimonials}
            direction='right'
            speed='slow'
        />
    </div>
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 gap-x-24 gap-y-8 md:gap-16 max-lg:mt-10 z-0">
        {phishingcompanies.map((company) => (
            <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2 lg:max-w-60">
                    <img
                        src={company.img}
                        alt={company.name}
                        className="md:w-10 w-5"
                    />
                    <img
                        src={company.nameImg}
                        alt={company.name}
                        width={company.id === 4 || company.id === 5 ? 100 : 150}
                        className="md:w-24 w-20"
                    />
                </div>
            </React.Fragment>
        ))}
    </div>
</section>
  )
}

export default PhishingClient