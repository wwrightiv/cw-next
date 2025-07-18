export type LiveEvent = {
  title: string;
  description: string;
  embedUrl: string;
};

// Mocked data for testing
const MOCK_EVENTS: Record<string, LiveEvent> = {
  'YOGA123': {
    title: 'Morning Yoga Flow',
    description: 'Start your day with a gentle yoga session led by our top instructor.',
    embedUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
  },
  'MEDITATE456': {
    title: 'Guided Meditation',
    description: 'Relax and refocus with a live guided meditation.',
    embedUrl: 'https://www.youtube.com/embed/inpok4MKVLM',
  },
};

// Flexible Contentful API fetcher (mocked for now)
export async function fetchLiveEvent(code: string): Promise<LiveEvent> {
  await new Promise(res => setTimeout(res, 1000)); // Simulate network delay
  const event = MOCK_EVENTS[code.toUpperCase()];
  if (!event) throw new Error('Not found');
  return event;
}

// Future: add more flexible fetchers for other Contentful content types 