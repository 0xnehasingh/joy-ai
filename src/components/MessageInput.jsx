import React from 'react';
import { Upload, Mic } from 'lucide-react';

const MessageInput = () => (
  <div className="border-t border-gray-200 p-4">
    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
      <Upload className="w-5 h-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Type your message to joy.ai"
        className="flex-1 bg-transparent outline-none"
      />
      <Mic className="w-5 h-5 text-gray-500 ml-2" />
    </div>
  </div>
);

export default MessageInput;