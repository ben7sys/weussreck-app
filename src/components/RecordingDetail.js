import React from 'react';
import { ChevronLeft, Play, Pause, FastForward, Rewind } from 'lucide-react';

const RecordingDetail = ({ recording, onClose }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="fixed inset-0 bg-white z-10 flex flex-col">
      {/* Header */}
      <div className="bg-gray-100 p-4 flex items-center">
        <button onClick={onClose} className="mr-4">
          <ChevronLeft className="text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">{recording.title}</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-sm text-gray-600 mb-4">
          {recording.date} - {recording.time} • Dauer: {recording.duration}
        </p>

        {/* Player */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <div className="flex justify-center items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200">
              <Rewind size={24} className="text-gray-700" />
            </button>
            <button 
              className="p-4 rounded-full bg-blue-500 text-white"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
            <button className="p-2 rounded-full bg-gray-200">
              <FastForward size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Transcript */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Transkript</h2>
          <p className="text-sm text-gray-700">
            Hier würde das Transkript der Aufnahme erscheinen. Dies könnte durch eine echte Transkriptions-API generiert werden.
          </p>
        </div>

        {/* AI Analysis */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">KI-Analyse</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Hauptthemen: Projekt XYZ, Budget, Zeitplan</li>
            <li>Stimmung: Überwiegend positiv</li>
            <li>Aktionspunkte: 3 identifiziert</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecordingDetail;