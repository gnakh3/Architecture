'use client'
import React from 'react'

type AddPortfolioButtonProps = {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}


const AddPortfolioButton = ({ setShowForm } : AddPortfolioButtonProps) => {
  return (

     <div className="col-span-1 md:col-span-1 lg:col-span-3 flex justify-center items-center h-full w-full">
            <button 
            className="w-auto h-18 flex items-center justify-center gap-3 bg-[#1B1D23] px-8 py-5 text-lg font-bold text-white hover:bg-[#60636D] hover:scale-102 transition-all duration-500"
            onClick={() => setShowForm(true)}
            >
                Add Portfolio Item          
                <span className="text-3xl">+</span> 
            </button>              
        </div>
)
}

export default AddPortfolioButton