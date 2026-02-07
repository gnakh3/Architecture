'use client'
import React, { useState } from 'react'
import Image from 'next/image'

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
  const [showForm, setShowForm] = React.useState(false);

  const [newTitle, setNewTitle] = React.useState('');
  const [newDate, setNewDate] = React.useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  React.useEffect(() => {
    const storedPortfolio = localStorage.getItem('portfolio');
    if (storedPortfolio) {
      setPortfolio(JSON.parse(storedPortfolio));
    }
    },[]);

    React.useEffect(() => {
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
    }, [portfolio]);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
      const file = event.target.files?.[0];
      if (file) {
      const url = URL.createObjectURL(file)
        setNewImageUrl(url);
      }else 
        {        
        setNewImageUrl('');
      }
    }

  const handleAddPortfolioItem = (newItem: PortfolioItem) => {
    setPortfolio([...portfolio, newItem]);
    setShowForm(false);
    setNewTitle('');
    setNewDate('');
    setNewImageUrl('');
  };

  return (
  // Portfolio Section
    <div className="portfolio-container">
      <div className=" w-full  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 pt-15 pb-15 bg bg-white  ">
          {portfolio.map((item) => (
            <div key={item.id} className="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ease-in-out hover:scale-102 hover:-translate-y-1 hover:opacity-70"     >
              <picture>
                <source media="(max-width: 600px)" srcSet={item.mobileimage} />
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

    {/* Add Portfolio Item */}

          <div className="col-span-1 md:col-span-1 lg:col-span-3 flex justify-center items-center h-full w-full">
            <button 
            className="w-auto h-18 flex items-center justify-center gap-3 bg-[#1B1D23] px-8 py-5 text-lg font-bold text-white hover:bg-[#60636D] hover:scale-102 transition-all duration-500"
            onClick={() => setShowForm(true)}
            >
                Add Portfolio Item          
                <span className="text-3xl">+</span> 
            </button>              
          </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold flex justify-center mb-6">Add New Portfolio Item</h2>
               <form onSubmit={(e) => {
                e.preventDefault();
                const newItem: PortfolioItem = {  
                  id: portfolio.length + 1,
                  title: newTitle,
                  date: newDate,
                  desctopimage: newImageUrl,
                  tabletimage: newImageUrl,
                  mobileimage: newImageUrl,
                };
                handleAddPortfolioItem(newItem);
              }
              }>
                <div className="mb-4">
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={newTitle}  
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Modern Architecture"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">  
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2" htmlFor="date">
                    Date
                  </label>
                  <input
                    id="date"
                    type="text" 
                    value={newDate}
                    onChange={(e) => {setNewDate(e.target.value)}}                  
                    placeholder="e.g. September 2024"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2" htmlFor="file">
                    Upload Image 
                  </label>
                  <input
                    id="file"
                    type="file"                    
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
               
                <button type="submit" className="px-4 py-2 bg-[#1B1D23] text-white rounded hover:bg-green-700 transition-colors duration-200">
                  Add Item
                </button>

                <button
                  type="button"
                  className="ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                  onClick={() => {setShowForm(false);
                  setNewTitle('');
                  setNewDate('');
                  setNewImageUrl('');
                  }
                  }
                >
                  Cancel
                </button>
              </form>
          </div>
            <div className=" bg-[#777981] rounded-xl w-100 h-113 p-10 flex items-center justify-center">
                {newImageUrl ? (
                  <div className="w-full h-full relative rounded-lg overflow-hidden">
                    <img 
                      src={newImageUrl} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-5 z-10">
                      <h3 className="text-[32px] font-bold text-white">
                        {newTitle || 'Portfolio Title'}
                      </h3>
                      <p className="text-gray-200 text-[18px]">
                        {newDate || 'Select Date'}
                      </p>
                    </div>
                </div>
                    ) : (
              <div className="text-center text-gray-400">
                <p className="text-xl">Upload an image to preview</p>
              </div>
            )}
          </div>
       </div> 
 )}
    </div>
    </div>
  )
}

export default Portfolio