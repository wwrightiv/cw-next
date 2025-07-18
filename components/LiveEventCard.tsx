import React from 'react';
import { LiveEvent } from '../lib/contentful';

type Props = {
  event: LiveEvent;
};

const LiveEventCard: React.FC<Props> = ({ event }) => (
  <div className="mt-8 p-6 bg-gray-50 rounded shadow text-center">
    <h2 className="text-xl font-bold mb-2">{event.title}</h2>
    <p className="mb-4 text-gray-700">{event.description}</p>
    {event.embedUrl && (
      <iframe
        src={event.embedUrl}
        title="Live Event"
        className="w-full h-64 rounded border"
        allowFullScreen
      />
    )}
  </div>
);

export default LiveEventCard; 