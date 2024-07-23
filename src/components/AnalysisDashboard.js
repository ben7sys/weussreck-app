import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Clock, Mic, List, Smile } from 'lucide-react';

const AnalysisDashboard = () => {
  // Beispieldaten für die Diagramme
  const weeklyData = [
    { name: 'Mo', duration: 45 },
    { name: 'Di', duration: 30 },
    { name: 'Mi', duration: 60 },
    { name: 'Do', duration: 40 },
    { name: 'Fr', duration: 55 },
    { name: 'Sa', duration: 20 },
    { name: 'So', duration: 10 },
  ];

  const topicData = [
    { name: 'Meetings', value: 35 },
    { name: 'Ideen', value: 25 },
    { name: 'To-Dos', value: 20 },
    { name: 'Sonstiges', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const stats = [
    { icon: <Clock size={24} />, value: '4h 35m', label: 'Gesamtaufnahmezeit' },
    { icon: <Mic size={24} />, value: '23', label: 'Aufnahmen diese Woche' },
    { icon: <List size={24} />, value: '12', label: 'Erstellte Aufgaben' },
    { icon: <Smile size={24} />, value: '78%', label: 'Positive Stimmung' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Analyse-Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="mr-4 text-blue-500">{stat.icon}</div>
            <div>
              <div className="text-xl font-semibold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Wöchentliche Aufnahmedauer</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="duration" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Aufnahmen nach Themen</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={topicData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {topicData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalysisDashboard;