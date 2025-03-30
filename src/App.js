import React, { useState } from 'react';
import { Menu, ChevronRight, X, User, Settings, BarChart2, MessageSquare } from 'lucide-react';
import RecordingDetail from './components/RecordingDetail';
import AnalysisDashboard from './components/AnalysisDashboard';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';
import ChatScreen from './components/ChatScreen';
import AIAssistantScreen from './components/AIAssistantScreen';

const WeusreckApp = () => {
  const [selectedRecording, setSelectedRecording] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('recordings');
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hallo! Ich bin dein Weusreck KI-Assistent. Wie kann ich dir heute helfen?", sender: 'ai' }
  ]);

  const recordings = [
    { id: 1, title: "Meeting Notizen", date: "11.07.2024", time: "15:30", duration: "45:22" },
    { id: 2, title: "Brainstorming", date: "11.07.2024", time: "11:15", duration: "32:10" },
    { id: 3, title: "Kundenfeedback-Analyse", date: "10.07.2024", time: "14:45", duration: "28:55" },
    { id: 4, title: "Projektplanung für Q3", date: "10.07.2024", time: "10:00", duration: "53:17" },
    { id: 5, title: "Teambuilding-Strategien", date: "09.07.2024", time: "16:20", duration: "39:41" },
  ];

  const suggestions = [
    "Transkript anzeigen",
    "Zusammenfassung",
    "Aufgabe erstellen",
    "Termin erstellen"
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
    setIsRecording(!isRecording);
  };

  const startRecording = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'de-DE';

      recognition.onstart = () => {
        console.log('Spracherkennung gestartet');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Erkanntes Transkript:', transcript);
        setInputText(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Fehler bei der Spracherkennung:', event.error);
      };

      recognition.onend = () => {
        console.log('Spracherkennung beendet');
        setIsRecording(false);
      };

      recognition.start();
    } else {
      console.error('Web Speech API wird nicht unterstützt.');
    }
  };

  const stopRecording = () => {
    // Logik zum Stoppen der Aufnahme, falls erforderlich
  };

  const SideMenu = () => (
    <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
          <X size={24} />
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <button onClick={() => { setCurrentScreen('recordings'); setSelectedRecording(null); toggleMenu(); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              <Menu size={18} className="inline-block mr-2" />
              Aufnahmen
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentScreen('profile'); toggleMenu(); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              <User size={18} className="inline-block mr-2" />
              Profil
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentScreen('settings'); toggleMenu(); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              <Settings size={18} className="inline-block mr-2" />
              Einstellungen
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentScreen('analysis'); toggleMenu(); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              <BarChart2 size={18} className="inline-block mr-2" />
              Analyse
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentScreen('ai-assistant'); toggleMenu(); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              <MessageSquare size={18} className="inline-block mr-2" />
              KI-Assistent
            </button>
          </li>
          <li>
            <button onClick={() => { setCurrentScreen('chat'); toggleMenu(); }} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              <MessageSquare size={18} className="inline-block mr-2" />
              Chat
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'recordings':
        return (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {recordings.map((recording) => (
                <div 
                  key={recording.id} 
                  className="bg-white rounded-lg shadow p-4 flex items-center cursor-pointer"
                  onClick={() => setSelectedRecording(recording)}
                >
                  <div className="bg-gray-200 rounded-full p-2 mr-3">
                    <ChevronRight className="text-gray-600" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{recording.title}</h3>
                    <p className="text-sm text-gray-500">
                      {recording.date} - {recording.time} • {recording.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 shadow-inner">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">KI-Vorschläge</h2>
              <div className="grid grid-cols-2 gap-3">
                {suggestions.map((suggestion, index) => (
                  <button 
                    key={index} 
                    className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </>
        );
      case 'analysis':
        return <AnalysisDashboard />;
      case 'profile':
        return <ProfileScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'ai-assistant':
        return <AIAssistantScreen />;
      case 'chat':
        return <ChatScreen 
                 inputText={inputText} 
                 setInputText={setInputText} 
                 handleSend={handleSend} 
                 handleRecord={handleRecord} 
                 isRecording={isRecording} 
               />;
      default:
        return <div>Screen nicht gefunden</div>;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col">
      {selectedRecording ? (
        <RecordingDetail 
          recording={selectedRecording} 
          onClose={() => setSelectedRecording(null)} 
        />
      ) : (
        <>
          <div className="bg-white p-4 flex items-center justify-between shadow">
            <div className="flex items-center">
              <button onClick={toggleMenu} className="mr-4">
                <Menu className="text-gray-700" />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">
                {currentScreen === 'recordings' ? 'Aufnahmen' : 
                 currentScreen === 'analysis' ? 'Analyse' : 
                 currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1)}
              </h1>
            </div>
          </div>

          <SideMenu />

          {renderCurrentScreen()}
        </>
      )}
    </div>
  );
};

export default WeusreckApp;