'use client'
import { motion } from 'framer-motion';
import react from 'react'

export type PortfolioCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
}



export default function PortfolioCard({ title, date, image }: PortfolioCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{opacity: 0.7 , scale: 1.02}}
      className="flex relative cursor-pointer overflow-hidden "
    >
      <img
        src={image}
        alt={title}
        className="lg:w-88 lg:h-140 md:w-143 md:h-60 w-78 h-60 object-cover"
      />
      <div 
        className="absolute bottom-8 pl-5 z-10 cursor-pointer">
        <h3 className="text-[32px] font-bold text-white">{title}</h3>
        <p className="text-gray-200 text-[18px]">{date}</p>
      </div>
    </motion.div>
  )
}