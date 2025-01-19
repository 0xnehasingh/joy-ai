import React from 'react';
import { FileText, Image, File, Book, PresentationIcon } from 'lucide-react';

const DownloadDropdown = ({ isOpen, onClose }) => (
  <div className={`${isOpen ? 'block' : 'hidden'} w-48 bg-white rounded-lg shadow-lg border border-gray-200`}>
    <div className="p-1 space-y-1">
      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
        <FileText className="w-4 h-4 mr-2" />
        <span>Audio format</span>
      </button>
      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
        <File className="w-4 h-4 mr-2" />
        <span>Text format</span>
      </button>
      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
        <Image className="w-4 h-4 mr-2" />
        <span>Image format</span>
      </button>
      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
        <Book className="w-4 h-4 mr-2" />
        <span>Word format</span>
      </button>
      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
        <File className="w-4 h-4 mr-2" />
        <span>PDF format</span>
      </button>
      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
        <PresentationIcon className="w-4 h-4 mr-2" />
        <span>Power-point format</span>
      </button>
    </div>
  </div>
);

export default DownloadDropdown;