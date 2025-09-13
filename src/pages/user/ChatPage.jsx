import React, { useState } from "react";
import Footer from "../../components/user/Footer";

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState("penjual");
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      role: "penjual",
      name: "Adam Zakky",
      lastMessage: "Jeraminya ada bang?",
      time: "09:00",
      messages: [
        { sender: "pembeli", text: "Jeraminya ada bang?", time: "09:00" },
        { sender: "penjual", text: "Ready bang", time: "09:00" },
        { sender: "pembeli", text: "Oke bang, mau pesen", time: "09:01" },
        { sender: "penjual", text: "Langsung aja bang", time: "09:02" },
      ],
    },
    {
      id: 2,
      role: "pembeli",
      name: "Astrid Fayyaza",
      lastMessage: "OTW kirim bang",
      time: "08:00",
      messages: [{ sender: "penjual", text: "OTW kirim bang", time: "08:00" }],
    },
  ];

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* Kontainer utama untuk konten halaman */}
      <div className="container mx-auto px-12 py-8 flex-grow">
        
        {/* Card judul halaman */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center gap-4 mb-8">
          <img 
            src="/src/assets/logo.png"
            alt="Ecotani Logo" 
            className="h-8" 
          />
          <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
          <h1 className="text-2xl font-bold text-[#43703a]">Chat</h1>
        </div>
        
        {/* Toggle Tab */}
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded shadow ${
              activeTab === "penjual" ? "bg-[#43703a] text-white" : "bg-white border text-gray-700"
            }`}
            onClick={() => {
              setActiveTab("penjual");
              setSelectedChat(null);
            }}
          >
            Sebagai Penjual
          </button>
          <button
            className={`px-4 py-2 rounded shadow ${
              activeTab === "pembeli" ? "bg-[#43703a] text-white" : "bg-white border text-gray-700"
            }`}
            onClick={() => {
              setActiveTab("pembeli");
              setSelectedChat(null);
            }}
          >
            Sebagai Pembeli
          </button>
        </div>

        {/* List Chat & Chat Area */}
        <div className="flex gap-4 border rounded shadow p-4">
          {/* List Chat */}
          <div className="w-1/3 space-y-4 pr-4 border-r">
            {chats
              .filter((c) => c.role === activeTab)
              .map((chat) => (
                <div
                  key={chat.id}
                  className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors duration-200 ${
                    selectedChat?.id === chat.id ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedChat(chat)}
                >
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    {/* indikator pesan */}
                    <span
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
                        activeTab === "penjual" ? "bg-red-500" : "bg-green-500"
                      }`}
                    ></span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{chat.name}</p>
                    <p className="text-gray-500 text-sm truncate">{chat.lastMessage}</p>
                  </div>
                  <span className="text-xs text-gray-400 self-start">{chat.time}</span>
                </div>
              ))}
          </div>

          {/* Area Chat */}
          <div className="w-2/3 flex flex-col justify-between">
            {!selectedChat ? (
              <>
                <div className="flex-10 flex items-center justify-center text-center text-[#43703a] font-bold">
                  <p className="p-1">Pilih Percakapan</p>
                </div>
                <div className="flex-1 flex items-center justify-center text-center text-gray-400">
                  <p className="text-gray-800">Pilih chat untuk memulai percakapan</p>
                </div>
              </>
            ) : (
              <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                {selectedChat.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-end gap-2 ${
                      msg.sender === "penjual" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender !== "penjual" && (
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                    )}
                    <div
                      className={`px-3 py-2 rounded-lg max-w-xs ${
                        msg.sender === "penjual"
                          ? "bg-[#43703a] text-white rounded-br-none"
                          : "bg-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                      <span className="block text-xs text-right opacity-80 mt-1">
                        {msg.time}
                      </span>
                    </div>
                    {msg.sender === "penjual" && (
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {selectedChat && (
              <div className="mt-4 flex gap-2">
                {/* Tombol unggah file */}
                <button className="px-3 py-2 bg-[#43703a] text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Tulis pesan..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#43703a]"
                />
                <button className="px-4 py-2 bg-[#43703a] text-white rounded-full">
                  <span className="transform rotate-45 inline-block">➤</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ChatPage;
