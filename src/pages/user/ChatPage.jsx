import React, { useState } from "react";

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState("penjual"); // "penjual" | "pembeli"

  const chats = [
    {
      id: 1,
      role: "pembeli",
      name: "Adam Zakky",
      lastMessage: "Jeraminya ada bang?",
      time: "09:00",
      messages: [
        { sender: "pembeli", text: "Jeraminya ada bang?", time: "09:00" },
        { sender: "pembeli", text: "Oke bang, mau pesen", time: "09:01" },
        { sender: "penjual", text: "Ready bang", time: "09:02" },
      ],
    },
    {
      id: 2,
      role: "penjual",
      name: "Astrid Fayyaza",
      lastMessage: "OTW kirim bang",
      time: "08:00",
      messages: [{ sender: "penjual", text: "OTW kirim bang", time: "08:00" }],
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-ecotani-green mb-4">Chat</h1>

      {/* Toggle Tab */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded shadow ${
            activeTab === "penjual"
              ? "bg-ecotani-green text-white"
              : "bg-white border"
          }`}
          onClick={() => setActiveTab("penjual")}
        >
          Sebagai Penjual
        </button>
        <button
          className={`px-4 py-2 rounded shadow ${
            activeTab === "pembeli"
              ? "bg-ecotani-green text-white"
              : "bg-white border"
          }`}
          onClick={() => setActiveTab("pembeli")}
        >
          Sebagai Pembeli
        </button>
      </div>

      {/* List Chat */}
      <div className="flex gap-4">
        <div className="w-1/3 border rounded p-3 space-y-4">
          {chats
            .filter((c) => c.role === activeTab)
            .map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-3 border-b pb-2"
              >
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  {/* indikator pesan */}
                  <span
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
                      chat.role === "pembeli" ? "bg-red-500" : "bg-green-500"
                    }`}
                  ></span>
                </div>
                <div>
                  <p className="font-semibold text-ecotani-green">
                    {chat.name}
                  </p>
                  <p className="text-gray-500 text-sm">{chat.lastMessage}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">
                  {chat.time}
                </span>
              </div>
            ))}
        </div>

        {/* Area Chat */}
        <div className="w-2/3 border rounded p-3 flex flex-col">
          <div className="flex-1 space-y-2">
            {chats[0].messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "penjual" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg ${
                    msg.sender === "penjual"
                      ? "bg-ecotani-green text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                  <span className="block text-xs text-right opacity-70">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Tulis pesan..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
            />
            <button className="px-4 py-2 bg-ecotani-green text-white rounded-full">
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
