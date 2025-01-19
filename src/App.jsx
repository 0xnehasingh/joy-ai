import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatMessage from "./components/ChatMessage";
import MessageInput from "./components/MessageInput";

const App = () => {
  const [messages] = useState([
    {
      content: "Give me a short poem for birds",
      isAI: false,
    },
    {
      content:
        "Feathers flutter, skies so wide,\nBirds in flight, a graceful glide.\nSongs of morning, whispers of breeze,\nNature's poets among the trees.",
      isAI: true,
    },
  ]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Premium badge centered at top */}
        <div className="p-4 border-b border-gray-200 flex justify-center">
          <span className="text-gray-500 px-6 py-1.5 rounded-full border border-gray-200">
            Premium
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* User profile above messages */}
          <div className="flex justify-end mb-2 items-center">
            <span className="mr-2 text-gray-600">Harshvardhan</span>
            <div className="w-8 h-8 rounded-full bg-gray-200">
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} {...msg} />
          ))}
        </div>

        <MessageInput />
      </div>
    </div>
  );
};

export default App;