'use client';

import React, { useState } from 'react';
import { fetchLiveEvent, LiveEvent } from '../../lib/contentful';
import LiveEventCard from '../../components/LiveEventCard';

const LivePage = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<LiveEvent | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
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
        {event && <LiveEventCard event={event} />}
      </div>
    </div>
  );
};

export default LivePage; 