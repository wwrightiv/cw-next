import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

// HERO BANNER AND VALUE PROPS
function HeroBanner() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-100  to-white py-20 flex flex-col items-center text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
        Breathe In. Connect Deeply. Live Fully.
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl mb-8">
        Experience transformative wellness programs that empower you to connect with yourself, others, and the present moment. Discover a path to healing, growth, and authentic connection.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 rounded bg-blue-400 text-white font-semibold shadow-lg hover:bg-blue-500 transition"
      >
        Start Your Journey
      </Link>
    </div>
  );
}

function ValueProps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6 max-w-5xl mx-auto">
      {/* Value Prop 1 */}
      <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Science-Backed Wellness</h3>
        <p className="text-gray-600 mb-4">
          Our programs are rooted in evidence-based practices, blending ancient wisdom with modern science for real, lasting change.
        </p>
      </div>
      {/* Value Prop 2 */}
      <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Live & On-Demand Experiences</h3>
        <p className="text-gray-600 mb-4">
          Access live classes and a rich library of on-demand content—anytime, anywhere, to fit your unique journey.
        </p>
      </div>
      {/* Value Prop 3 */}
      <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Community & Support</h3>
        <p className="text-gray-600 mb-4">
          Join a welcoming community and receive guidance from expert instructors dedicated to your well-being and growth.
        </p>
      </div>
    </div>
  );
}

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <HeroBanner />
            <ValueProps />
            {/* Existing content below can be removed or kept as needed */}
            {/*
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Netlify Platform Starter - Next.js</h1>
                <p className="mb-6 text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-lg sm:min-w-64">
                    Read the Docs
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            */}
        </div>
    );
}
