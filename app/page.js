import Link from 'next/link';

const counties = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos', 'Kajiado',
  'Uasin Gishu', 'Meru', 'Kakamega', 'Bungoma', 'Kilifi', 'Nyeri', 'Murang\'a'
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="bg-gradient-to-br from-kenya-green via-kenya-black to-kenya-red text-white">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Karibu Mtaani</div>
          <div className="space-x-4">
            <Link href="/discover" className="hover:underline">Discover</Link>
            <Link href="/discover" className="bg-white text-kenya-green px-4 py-2 rounded-full font-medium hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet people near you in Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Location-based matchmaking. Filter by county, distance, interests, tribe, religion, and lifestyle.
          </p>
          <Link
            href="/discover"
            className="inline-block bg-white text-kenya-green text-lg px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Start Matching
          </Link>
        </div>
      </header>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Karibu Mtaani works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Create your profile', desc: 'Add photos, bio, age, county, interests, tribe & more.' },
            { title: 'Enable location', desc: 'Share approximate location or pick your county. See people nearby.' },
            { title: 'Match & chat', desc: 'Swipe, like, match, then chat safely with people near you.' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Counties */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular counties</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {counties.map((c) => (
              <Link
                key={c}
                href={`/discover?county=${encodeURIComponent(c)}`}
                className="px-4 py-2 bg-gray-100 hover:bg-kenya-green hover:text-white rounded-full text-sm font-medium transition"
              >
                {c}
              </Link>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-500">+ all 47 counties of Kenya</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kenya-black text-white py-8 text-center">
        <p>Karibu Mtaani — Built for Kenyans who want to meet people near them.</p>
        <p className="text-sm mt-2 opacity-70">Safety first. Never share exact location. Report & block anytime.</p>
      </footer>
    </div>
  );
}
