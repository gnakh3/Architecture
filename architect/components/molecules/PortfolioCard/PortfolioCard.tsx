'use client'
import React, { useState, useEffect } from 'react'
import AddPortfolioButton from '../AddPortfolioButton/AddPortfolioButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type PortfolioItem = {
  id: number;
  title: string;
  date: string;
  desctopimage: string;
  tabletimage: string;
  mobileimage: string;
}

type PortfolioCardProps = {
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
}

const PortfolioCard = ({ portfolio, setPortfolio }: PortfolioCardProps) => {
    const [showForm, setShowForm] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [newDate, setNewDate] = React.useState('');
    const [newImageUrl, setNewImageUrl] = useState('');

  
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
    <>
    <AddPortfolioButton setShowForm={setShowForm} />
    {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-[500px] max-w-2xl bg-white shadow-2xl p-8">
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
                    className="w-[430px] px-3 py-2 border "
                    required
                  />
                </div>
                <div className="mb-4">  
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2" htmlFor="date">
                    Date
                  </label>
                  <DatePicker
                    id="date"
                    selected={selectedDate}
                    onChange={(date: Date | null) => {
                      setSelectedDate(date);
                      if (date) {
                        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
                        const formattedDate = date.toLocaleDateString('en-US', options);
                        setNewDate(formattedDate);
                      }
                    }}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                    placeholderText="Select Date"
                    className="w-[430px] px-3 py-2 border"
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
                    className="w-[430px] px-3 py-2 border"
                  />
                </div>
               
                <button type="submit" className="px-4 py-2 bg-[#1B1D23] text-white hover:bg-green-700 hover:scale-102 transition-all duration-500">
                  Add Item
                </button>

                <button
                  type="button"
                  className="ml-4 px-4 py-2 bg-gray-500 text-white hover:bg-red-600 hover:scale-102 transition-all duration-500"
                  onClick={() => {setShowForm(false);
                  setNewTitle('');
                  setNewDate('');
                  setSelectedDate(null);
                  setNewImageUrl('');
                  }
                  }
                >
                  Cancel
                </button>
              </form>
          </div>
            <div className=" bg-[#777981]  w-100 h-112 p-10 flex items-center justify-center">
                {newImageUrl ? (
                  <div className="w-full h-full relative overflow-hidden">
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
    </>
  );
}

export default PortfolioCard