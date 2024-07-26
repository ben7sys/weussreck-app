import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';

const AIAssistantScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hallo! Ich bin dein Weusreck KI-Assistent. Wie kann ich dir heute helfen?", sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const suggestions = [
    "Transkript anzeigen",
    "Zusammenfassung",
    "Aufgabe erstellen",
    "Termin erstellen"
  ];

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, text: inputText, sender: 'user' }]);
      setInputText('');
      // Hier würde die Logik für die KI-Antwort implementiert werden
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          id: prevMessages.length + 1, 
          text: "Ich verarbeite deine Anfrage. Einen Moment bitte...", 
          sender: 'ai' 
        }]);
      }, 1000);
    }
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
    // Hier würde die Logik für die Sprachaufnahme implementiert werden
  };

  const handleSuggestion = (suggestion) => {
    setMessages([...messages, { id: messages.length + 1, text: suggestion, sender: 'user' }]);
    // Hier würde die Logik für die Verarbeitung des Vorschlags implementiert werden
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white shadow'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="bg-white p-4 shadow-inner">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">KI-Vorschläge</h2>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {suggestions.map((suggestion, index) => (
            <button 
              key={index}
              onClick={() => handleSuggestion(suggestion)}
              className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 text-sm hover:bg-gray-200 transition-colors duration-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRecord}
            className={`p-3 rounded-full ${isRecording ? 'bg-red-500' : 'bg-blue-500'} text-white`}
          >
            <Mic size={24} />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nachricht eingeben..."
            className="flex-1 bg-gray-100 rounded-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white rounded-full p-3"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantScreen;