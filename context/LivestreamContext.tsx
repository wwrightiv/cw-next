'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { LiveEvent } from '../lib/contentful';

interface LivestreamContextType {
  event: LiveEvent | null;
  setEvent: (event: LiveEvent | null) => void;
}

const STORAGE_KEY = 'user-data';
const LivestreamContext = createContext<LivestreamContextType | undefined>(undefined);

export function LivestreamProvider({ children }: { children: ReactNode }) {
  const [event, setEvent] = useState<LiveEvent | null>(null);

  // Hydrate from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed === 'object' && parsed.event) {
            setEvent(parsed.event);
          }
        } catch {}
      }
    }
  }, []);

  // Persist to sessionStorage on event change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ event }));
    }
  }, [event]);

  return (
    <LivestreamContext.Provider value={{ event, setEvent }}>
      {children}
    </LivestreamContext.Provider>
  );
}

export function useLivestream() {
  const ctx = useContext(LivestreamContext);
  if (!ctx) throw new Error('useLivestream must be used within a LivestreamProvider');
  return ctx;
} 