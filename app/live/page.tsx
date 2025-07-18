'use client';

import React, { useState } from 'react';
import { fetchLiveEvent, LiveEvent } from '../../lib/contentful';
import { useLivestream } from '../../context/LivestreamContext';
import { useRouter } from 'next/navigation';

const LiveEventCard: React.FC<{ event: LiveEvent }> = ({ event }) => (
  <div className="w-full max-w-4xl mx-auto mt-8">
    <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow">
      <iframe
        src={event.embedUrl}
        title="Live Event"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
    <div className="mt-6 text-left">
      <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-700">{event.description}</p>
    </div>
  </div>
);

const LivePage = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { event, setEvent } = useLivestream();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setEvent(null);
    try {
      const result = await fetchLiveEvent(meetingCode);
      setEvent(result);
    } catch (err: any) {
      setError('No event found for that code.');
    } finally {
      setLoading(false);
    }
  };

  const handleLeave = () => {
    setEvent(null);
    setMeetingCode('');
    router.push('/live');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-2">
      {!event && (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-12">
          <h1 className="text-2xl font-bold mb-6 text-center">Join a Live Meeting</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="meetingCode" className="text-sm font-medium text-gray-700">
              Meeting Code
            </label>
            <input
              id="meetingCode"
              name="meetingCode"
              type="text"
              required
              placeholder="Enter your code"
              value={meetingCode}
              onChange={e => setMeetingCode(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Join'}
            </button>
          </form>
          {loading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          )}
          {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
        </div>
      )}
      {event && (
        <>
          <LiveEventCard event={event} />
          <div className="w-full max-w-4xl mx-auto flex justify-end mt-8 mb-8">
            <button
              onClick={handleLeave}
              className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 transition"
            >
              Leave Livestream
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LivePage; 