'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import PortfolioCard from '../../molecules/PortfolioCard/PortfolioCard'

type PortfolioItem = {
  id: number;
  title: string;
  date: string;
  desctopimage: string;
  tabletimage: string;
  mobileimage: string;
}

function Portfolio() {
  const portfolioItems = [
    { 
      id: 1,
      title: "Seraph Station",
      date: "September 2019",
      desctopimage: "/Portfolio/Seraph.webp",
      tabletimage: "/Portfolio/TabletSeraph.webp",
      mobileimage: "/Portfolio/mobile1.webp",
    },
    { 
      id: 2,
      title: "Eebox Building",
      date: "August 2017",
      desctopimage: "/Portfolio/Eebox.webp",
      tabletimage: "/Portfolio/TabletEebox.webp",
      mobileimage: "/Portfolio/mobile2.webp",
    },
    {
      id: 3,
      title: "Federal II Tower",
      date: "March 2017",
      desctopimage: "/Portfolio/Federal.webp",
      tabletimage: "/Portfolio/TabletFederal.webp",
      mobileimage: "/Portfolio/mobile3.webp",  
    }
    , {
      id: 4,
      title: "Project Del Sol",
      date: "January 2016",
      desctopimage: "/Portfolio/Project.webp",
      tabletimage: "/Portfolio/TabletProject.webp",
      mobileimage: "/Portfolio/mobile4.webp",
    },
    {
      id: 5,
      title: "Le Prototype",
      date: "October 2015",
      desctopimage: "/Portfolio/LeProtype.webp",
      tabletimage: "/Portfolio/TabletLePrototype.webp",
      mobileimage: "/Portfolio/mobile5.webp", 
    },
    {
      id: 6,
      title: "228B Tower",
      date: "April 2015",
      desctopimage: "/Portfolio/228BTower.webp",  
      tabletimage: "/Portfolio/Tablet228B.webp",
      mobileimage: "/Portfolio/mobile6.webp",
    },
    {
      id: 7,
      title: "Grand Edelweiss Hotel",
      date: "December 2013",
      desctopimage: "/Portfolio/GrandED.webp",
      tabletimage: "/Portfolio/TabletGrand.webp",
      mobileimage: "/Portfolio/mobile7.webp",
    },
    {
      id: 8,
      title: "Netcry Tower",
      date: "August 2012",
      desctopimage: "/Portfolio/Netcry.webp",
      tabletimage: "/Portfolio/TabletNetcry.webp",
      mobileimage: "/Portfolio/mobile8.webp",
    },
    {
      id: 9,
      title: "Hypers",
      date: "January 2012",
      desctopimage: "/Portfolio/Hypers.webp",
      tabletimage: "/Portfolio/TabletHypers.webp",
      mobileimage: "/Portfolio/mobile9.webp",
    },
    {
      id: 10,
      title: "SXIV Tower",
      date: "March 2011",
      desctopimage: "/Portfolio/SXIVTower.webp",
      tabletimage: "/Portfolio/TabletSXIV.webp",
      mobileimage: "/Portfolio/mobile10.webp",
    },
    {
      id: 11,
      title: "Trinity Bank Tower",
      date: "September 2010",
      desctopimage: "/Portfolio/Trinty.webp",
      tabletimage: "/Portfolio/TabletTrinity.webp",
      mobileimage: "/Portfolio/mobile11.webp",
    },
    {
      id: 12,
      title: "Project Paramour",
      date: "February 2008",
      desctopimage: "/Portfolio/ProjectParamour.webp",
      tabletimage: "/Portfolio/TabletProjectParamour.webp",
      mobileimage: "/Portfolio/mobile12.webp",
    }
  ]

  const [portfolio, setPortfolio] = React.useState<PortfolioItem[]>(portfolioItems);

  React.useEffect(() => {
      const storedPortfolio = localStorage.getItem('portfolio');
      if (storedPortfolio) {
        setPortfolio(JSON.parse(storedPortfolio));
      }
      },[]);
  
      React.useEffect(() => {
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
      }, [portfolio]);
  

  return (
  // Portfolio Section
    <div className="portfolio-container w-full flex justify-center items-center ">
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 pt-15 pb-15 bg bg-white  ">
          {portfolio.map((item) => (
            <div key={item.id} className="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ease-in-out hover:scale-102 hover:-translate-y-1 hover:opacity-70"     >
    <div className="portfolio-container w-full flex justify-center items-center ">
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 pt-15 pb-15 bg bg-white  ">
          {portfolio.map((item) => (
            <div key={item.id} className="flex relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out hover:scale-102 hover:-translate-y-1 hover:opacity-70"     >
            <div key={item.id} className="flex relative cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ease-in-out hover:scale-102 hover:-translate-y-1 hover:opacity-70"     >
              <picture>
                <source media="(max-width: 660px)" srcSet={item.mobileimage} />
                <source media="(max-width: 1024px)" srcSet={item.tabletimage} />
                <img 
                src={item.desctopimage} 
                alt={item.title} 
                className="lg:w-88 lg:h-140 md:w-143 md:h-60 sm:w-78 sm:h-60 object-cover" 
                />
                </picture>
              <div className="absolute bottom-8 pl-5 z-10 cursor-pointer ">
                <h3 className="text-[32px] font-bold  text-white ">{item.title}</h3>
                <p className="text-gray-200 text-[18px]">{item.date}</p>
              </div>
            </div>
          ))}
          <div>
        </div>
        <PortfolioCard portfolio={portfolio} setPortfolio={setPortfolio} /> 
      </div>  
    </div>
  )
}

export default Portfolio