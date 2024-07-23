import React from 'react';
import { User, Mail, Phone, Calendar } from 'lucide-react';

const ProfileScreen = () => {
  // Diese Daten würden normalerweise aus einem Backend oder State Management System kommen
  const user = {
    name: 'Max Mustermann',
    email: 'max.mustermann@example.com',
    phone: '+49 123 4567890',
    joinDate: '01.01.2024'
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Profil</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-500 rounded-full p-4">
            <User size={64} className="text-white" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="mr-2 text-gray-600" size={20} />
            <span className="font-semibold">{user.name}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 text-gray-600" size={20} />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 text-gray-600" size={20} />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 text-gray-600" size={20} />
            <span>Mitglied seit: {user.joinDate}</span>
          </div>
        </div>
        
        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
          Profil bearbeiten
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;