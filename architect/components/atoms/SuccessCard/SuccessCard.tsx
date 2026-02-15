import React from 'react'
import Image from 'next/image';

type SuccessCardProps = {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    email: string;
}
const SuccessCard = ({ isOpen, onClose, name, email }: SuccessCardProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0e121b]/40 backdrop-blur-sm">
            <div className="relative w-105 max-w-[90%] bg-white px-8 pt-8 pb-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                <button onClick={onClose} className="absolute top-5 right-5 cursor-pointer text-[rgba(96,99,109,1)] hover:text-[rgba(27,29,35,1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>

                <div className="flex justify-center mb-6">
                    <Image width={48} height={48} src="/success.png" alt="Success" />
                </div>

                <h1 className="text-2xl font-semibold text-center text-[rgba(27,29,35,1)] mb-3">Message Sent</h1>

                <p className="text-center text-[15px] leading-6 text-[rgba(96,99,109,1)] max-w-[320px] mx-auto">
                    Thank you, <span className="font-medium text-[rgba(27,29,35,1)]">{name}</span>.
                    We’ll get back to you at
                    <span className="font-medium text-[rgba(27,29,35,1)]"> {email}</span> as soon as possible.
                </p>
            </div>
        </div>

    )
}

export default SuccessCard