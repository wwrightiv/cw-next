'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { LiveEvent } from '../lib/contentful';

interface LivestreamContextType {
  event: LiveEvent | null;
  setEvent: (event: LiveEvent | null) => void;
}

const LivestreamContext = createContext<LivestreamContextType | undefined>(undefined);

export function LivestreamProvider({ children }: { children: ReactNode }) {
  const [event, setEvent] = useState<LiveEvent | null>(null);
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