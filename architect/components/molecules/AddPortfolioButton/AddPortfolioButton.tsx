'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export type PortfolioItem = {
  id: number;
  title: string;
  date: string;
  image: string;
}

type AddPortfolioButtonProps = {
  onAddItem: (item: PortfolioItem) => void;
  portfolioLength: number;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: easeOut } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export default function AddPortfolioButton({ onAddItem, portfolioLength }: AddPortfolioButtonProps) {
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState<Date | null>(null);
  const [newImageUrl, setNewImageUrl] = useState('');

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return setNewImageUrl('');

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedDataUrl = canvas.toDataURL('image/webp', 0.7);
        setNewImageUrl(compressedDataUrl);
      }
    }
    reader.readAsDataURL(file);
  }

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl) return;
    const newItem: PortfolioItem = {
      id: portfolioLength + 1,
      title: newTitle,
      date: formatDate(newDate),
      image: newImageUrl,
    };
    onAddItem(newItem);
    handleCancel();
  };

  const handleCancel = () => {
    setShowForm(false);
    setNewTitle('');
    setNewDate(null);
    setNewImageUrl('');
  };

  return (
    <>
      <div className="col-span-1 md:col-span-1 lg:col-span-3 flex justify-center items-center h-full w-full">
        <motion.button
          className="w-auto h-18 flex items-center justify-center gap-3 bg-[#1B1D23] px-8 py-5 text-lg font-bold text-white"
          onClick={() => setShowForm(true)}
          whileHover={{ backgroundColor: "#60636D", scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Add Portfolio Item
          <motion.span className="text-3xl inline-block" whileHover={{ scale: 1.2, rotate: 90 }} transition={{ duration: 0.3 }}>
            +
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCancel}
          >
            <motion.div
              className="w-full max-w-2xl bg-white shadow-2xl p-8"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.h2 className="text-4xl font-bold flex justify-center mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Add New Portfolio Item
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2">Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Modern Architecture"
                    className="w-full px-3 py-2 border"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2">Date</label>
                  <DatePicker
                    selected={newDate}
                    onChange={(date: Date | null) => setNewDate(date)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                    placeholderText="Select month and year"
                    className="lg:w-152 md:w-100 px-3 py-2 border"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-[#73767c] text-[18px] font-bold mb-2">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[#1B1D23] file:text-white hover:file:bg-[#60636D] file:transition-all file:duration-300"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <motion.button type="submit" className="px-6 py-3 bg-[#1B1D23] text-white"
                    whileHover={{ backgroundColor: "#059669", scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add Item
                  </motion.button>

                  <motion.button type="button" className="px-6 py-3 bg-gray-500 text-white" onClick={handleCancel}
                    whileHover={{ backgroundColor: "#dc2626", scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <div className="bg-[#777981] w-100 h-117 p-10 flex items-center justify-center ml-4 shadow-2xl">
              <AnimatePresence mode="wait">
                {newImageUrl ? (
                  <motion.img
                    key="preview"
                    src={newImageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  />
                ) : (
                  <p className="text-center text-gray-400 text-xl animate-pulse">Upload an image to preview</p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
