import React from 'react';
import { MessageSquare, Star, Calendar, Clock, Search, Diamond } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 h-screen border-r border-gray-200 p-4 flex flex-col">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 rounded-full bg-gray-100"></div>
      <span className="ml-2 text-lg font-semibold">Joy.AI</span>
    </div>
    
    <div className="space-y-4 flex-1">
      <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg p-2 w-full">
        <MessageSquare className="w-5 h-5 mr-3" />
        <span>New chat</span>
      </button>
      
      <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg p-2 w-full">
        <Star className="w-5 h-5 mr-3" />
        <span>Starred messages</span>
      </button>
      
      <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg p-2 w-full">
        <Calendar className="w-5 h-5 mr-3" />
        <span>Calendar</span>
      </button>
      
      <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg p-2 w-full">
        <Clock className="w-5 h-5 mr-3" />
        <span>History</span>
        <Search className="w-4 h-4 ml-auto" />
      </button>
    </div>
    
    <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg p-2 w-full mt-auto">
      <Diamond className="w-5 h-5 mr-3" />
      <span>Premium Plan</span>
    </button>
  </div>
);

export default Sidebar;