import React, { useState } from "react";
import { HelpCircle, RefreshCw, Copy, Star } from "lucide-react";
import VerticalDots from "./VerticalDots";
import DownloadDropdown from "./DownloadDropdown";

const ChatMessage = ({ content, isAI }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isAI) {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-2xl rounded-lg p-4 bg-gray-100">
          <p>{content}</p>
        </div>
      </div>
    );
  }

  

  // In ChatMessage.jsx, update the user message return statement:
// if (!isAI) {
//   return (
//     <div className="flex justify-end">
//       <div className="max-w-2xl rounded-lg p-4 bg-gray-100">
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }
  return (
    <div className="flex mb-4 relative">
      <div className="flex">
        <div className="mr-4 mt-4 relative">
          <HelpCircle className="w-6 h-6 text-gray-400" />
          <VerticalDots />
        </div>
        <div className="flex flex-col">
        <div className="max-w-2xl rounded-lg p-4" style={{ backgroundColor: "#dfed7e" }}>
            <p className="whitespace-pre-line">{content}</p>
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Copy className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Star className="w-4 h-4 text-gray-500" />
            </button>
            <div className="relative">
              <button
                className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 border rounded-md hover:bg-gray-50"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Download this info as</span>
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 z-10">
                <DownloadDropdown
                  isOpen={isDropdownOpen}
                  onClose={() => setIsDropdownOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
