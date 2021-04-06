import { useState } from 'react';

export default function Layout(props) {
  var [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="fixed flex flex-col h-screen items-end p-4 right-0 inset-y-0">
        <div className={`border flex-1 mb-2 overflow-hidden rounded rounded-lg transition duration-700 ${isOpen ? '' : 'invisible opacity-0'}`}>
          {props.children}
        </div>
        <button
          className="bg-[#0785f2] border border-[#0785f2] focus:outline-none focus:ring h-12 hover:bg-[#031d40] hover:border-[#031d40] inline-flex items-center justify-around ring-offset-1 rounded-full text-white w-12 mt-auto"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className="sr-only">Open Chatbot</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 w-8" viewBox="0 0 16 16">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}