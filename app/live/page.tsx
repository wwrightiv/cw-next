import React from 'react';

// Renders a centered card with a form to enter a Meeting Code
const LivePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Join a Live Meeting</h1>
        <form className="flex flex-col gap-4">
          <label htmlFor="meetingCode" className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Meeting Code
          </label>
          <input
            id="meetingCode"
            name="meetingCode"
            type="text"
            required
            placeholder="Enter your code"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default LivePage; 