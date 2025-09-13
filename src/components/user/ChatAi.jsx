import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import zanuImg from "../../assets/zanu.png"; // ✅ import gambar dari assets

const ChatAI = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Halo! Saya Zanu, asisten AI untuk Ecotani. Saya siap membantu Anda dengan pertanyaan seputar jual beli limbah daur ulang. Ada yang bisa saya bantu?',
      time: '09:01'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newUserMessage = {
        sender: 'user',
        text: inputMessage,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setInputMessage('');

      // Simulasi respons AI
      setTimeout(() => {
        const newAiMessage = {
          sender: 'ai',
          text: 'Terima kasih atas pertanyaannya! Tim kami akan segera menindaklanjuti. Ada lagi yang bisa saya bantu?',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prevMessages => [...prevMessages, newAiMessage]);
      }, 1000);
    }
  };

  const handleQuickQuestion = (question) => {
    const newUserMessage = {
      sender: 'user',
      text: question,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    
    // Simulasi respons AI untuk pertanyaan cepat
    setTimeout(() => {
      let responseText = '';
      if (question === 'Cara Menjual Limbah') {
        responseText = 'Untuk menjual limbah, Anda bisa mendaftar, lalu unggah produk limbah Anda dengan detail yang jelas. Setelah itu, pembeli yang tertarik akan menghubungi Anda.';
      } else if (question === 'Kategori Limbah') {
        responseText = 'Kami menerima berbagai kategori limbah seperti plastik, kertas, kardus, logam, kaca, dan elektronik. Silakan cek halaman produk kami untuk detail lebih lanjut.';
      } else if (question === 'Apa itu Limbah?') {
        responseText = 'Limbah adalah sisa atau buangan dari suatu kegiatan yang sudah tidak terpakai. Limbah bisa berasal dari rumah tangga, industri, pertanian, maupun aktivitas lainnya. Ada lagi yang bisa saya bantu?';
      }
      
      const newAiMessage = {
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prevMessages => [...prevMessages, newAiMessage]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-24 right-5 z-50 w-96 max-h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden font-sans flex flex-col"
    >
      {/* Chat Header */}
      <div className="bg-white p-4 border-b border-gray-200 flex items-center shadow-sm">
        <div className="flex-shrink-0">
          <img src={zanuImg} alt="Zanu" className="w-10 h-10" />
        </div>
        <div className="ml-3">
          <h5 className="text-lg font-bold text-gray-800">Zanu</h5>
          <p className="text-sm text-gray-500">Asisten AI untuk Ecotani • Aktif 24/7</p>
        </div>
        <button onClick={onClose} className="ml-auto text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2.5`}>
            {message.sender === 'ai' && (
              <img src={zanuImg} alt="Zanu" className="w-8 h-8 rounded-full self-start" />
            )}
            <div className={`flex flex-col w-full max-w-[200px] leading-1.5 p-4 rounded-xl ${message.sender === 'user' ? 'bg-gray-200 rounded-es-xl rounded-ss-xl' : 'bg-gray-100 rounded-se-xl rounded-ee-xl'}`}>
              <p className="text-sm font-normal text-gray-900">{message.text}</p>
              <span className={`text-xs text-gray-500 mt-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>{message.time}</span>
            </div>
          </div>
        ))}
        <div className="flex flex-wrap justify-start gap-2.5">
          <button className="py-2 px-3 text-sm font-medium text-white bg-[#43703A] rounded" onClick={() => handleQuickQuestion('Cara Menjual Limbah')}>Cara Menjual Limbah</button>
          <button className="py-2 px-3 text-sm font-medium text-white bg-[#43703A] rounded" onClick={() => handleQuickQuestion('Kategori Limbah')}>Kategori Limbah</button>
          <button className="py-2 px-3 text-sm font-medium text-white bg-[#43703A] rounded" onClick={() => handleQuickQuestion('Apa itu Limbah?')}>Apa itu Limbah?</button>
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="flex items-center p-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Tulis pesan..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow py-2 px-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ecotani-green"
        />
        <button type="submit" className="ml-3 text-ecotani-green hover:text-green-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </motion.div>
  );
};

export default ChatAI;
