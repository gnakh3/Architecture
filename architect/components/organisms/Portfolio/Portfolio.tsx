'use client'
import React from 'react'
import Image from 'next/image'
import PortfolioCard, { type PortfolioCardProps } from '../../molecules/PortfolioCard/PortfolioCard'
import AddPortfolioButton from '../../molecules/AddPortfolioButton/AddPortfolioButton'
import { motion } from 'framer-motion'

type PortfolioItem = PortfolioCardProps

const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Seraph Station",
    date: "September 2019",
    image: "Portfolio/Seraph.webp",
  },
  {
    id: 2,
    title: "Eebox Building",
    date: "August 2017",
    image: "Portfolio/Eebox.webp",
  },
  {
    id: 3,
    title: "Federal II Tower",
    date: "March 2017",
    image: "Portfolio/Federal.webp",
  },
  {
    id: 4,
    title: "Project Del Sol",
    date: "January 2016",
    image: "Portfolio/Project.webp",
  },
  {
    id: 5,
    title: "Le Prototype",
    date: "October 2015",
    image: "Portfolio/LeProtype.webp",
  },
  {
    id: 6,
    title: "228B Tower",
    date: "April 2015",
    image: "Portfolio/228BTower.webp",
  },
  {
    id: 7,
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
    image: "Portfolio/GrandED.webp",
  },
  {
    id: 8,
    title: "Netcry Tower",
    date: "August 2012",
    image: "Portfolio/Netcry.webp",
  },
  {
    id: 9,
    title: "Hypers",
    date: "January 2012",
    image: "Portfolio/Hypers.webp",
  },
  {
    id: 10,
    title: "SXIV Tower",
    date: "March 2011",
    image: "Portfolio/SXIVTower.webp",
  },
  {
    id: 11,
    title: "Trinity Bank Tower",
    date: "September 2010",
    image: "Portfolio/Trinty.webp",
  },
  {
    id: 12,
    title: "Project Paramour",
    date: "February 2008",
    image: "Portfolio/ProjectParamour.webp",
  }
];

export default function Portfolio() {
  const [portfolio, setPortfolio] = React.useState<PortfolioItem[]>(defaultPortfolioItems);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const storedPortfolio = localStorage.getItem('portfolio');
    if (storedPortfolio) {
      setPortfolio(JSON.parse(storedPortfolio));
    }
    setIsLoaded(true);
  }, []);

  React.useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
    }
  }, [portfolio, isLoaded]);

  const handleAddPortfolioItem = (newItem: PortfolioItem) => {
    setPortfolio([...portfolio, newItem]);
  };

  return (
    <div className="portfolio-container w-full flex justify-center items-center animate-fadeIn">
      <Image
        src="/portfdecor.svg"
        alt="Decoration"
        width={24}
        height={272}
        className="absolute left-12 top-0 hidden min-[774px]:block"
      />
      <motion.div 
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 pt-15 pb-15 bg bg-white">
        {portfolio.map((item) => (
          <PortfolioCard
            key={item.id}
            {...item}
          />
        ))}
        
        <AddPortfolioButton 
          onAddItem={handleAddPortfolioItem}
          portfolioLength={portfolio.length}
        />
      </motion.div>
    </div>
  )
}