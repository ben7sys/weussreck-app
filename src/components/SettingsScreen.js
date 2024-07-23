import React, { useState } from 'react';
import { Bell, Moon, Globe, Lock, VolumeX, HelpCircle } from 'lucide-react';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('Deutsch');

  const SettingItem = ({ icon, title, description, children }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center">
        {icon}
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Einstellungen</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <SettingItem 
          icon={<Bell className="text-gray-600" size={24} />}
          title="Benachrichtigungen"
          description="Verwalten Sie Ihre Benachrichtigungseinstellungen"
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={notifications} onChange={() => setNotifications(!notifications)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </SettingItem>

        <SettingItem 
          icon={<Moon className="text-gray-600" size={24} />}
          title="Dunkler Modus"
          description="Aktivieren Sie den dunklen Modus für die App"
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </SettingItem>

        <SettingItem 
          icon={<Globe className="text-gray-600" size={24} />}
          title="Sprache"
          description="Wählen Sie Ihre bevorzugte Sprache"
        >
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option value="Deutsch">Deutsch</option>
            <option value="English">English</option>
            <option value="Français">Français</option>
          </select>
        </SettingItem>

        <SettingItem 
          icon={<Lock className="text-gray-600" size={24} />}
          title="Datenschutz"
          description="Verwalten Sie Ihre Datenschutzeinstellungen"
        >
          <button className="text-blue-600 hover:text-blue-800">Bearbeiten</button>
        </SettingItem>

        <SettingItem 
          icon={<VolumeX className="text-gray-600" size={24} />}
          title="Audio-Einstellungen"
          description="Passen Sie die Audio-Einstellungen an"
        >
          <button className="text-blue-600 hover:text-blue-800">Anpassen</button>
        </SettingItem>

        <SettingItem 
          icon={<HelpCircle className="text-gray-600" size={24} />}
          title="Hilfe & Support"
          description="Erhalten Sie Hilfe und Support"
        >
          <button className="text-blue-600 hover:text-blue-800">Öffnen</button>
        </SettingItem>
      </div>
    </div>
  );
};

export default SettingsScreen;