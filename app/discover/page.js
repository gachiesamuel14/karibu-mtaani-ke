'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COUNTIES = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos', 'Kajiado',
  'Uasin Gishu', 'Meru', 'Kakamega', 'Bungoma', 'Kilifi', 'Nyeri', 'Murang\'a',
  'Laikipia', 'Narok', 'Kisii', 'Migori', 'Homa Bay', 'Siaya'
];

const MOCK_PROFILES = [
  { id: 1, name: 'Amina', age: 26, county: 'Nairobi', town: 'Westlands', bio: 'Coffee, hiking, and good vibes. Looking for someone genuine.', interests: ['Coffee', 'Hiking', 'Travel'], tribe: 'Kikuyu', distance: 3.2 },
  { id: 2, name: 'Brian', age: 29, county: 'Mombasa', town: 'Nyali', bio: 'Beach lover, entrepreneur. Let\'s explore the coast together.', interests: ['Beach', 'Business', 'Music'], tribe: 'Swahili', distance: 1.8 },
  { id: 3, name: 'Faith', age: 24, county: 'Kisumu', town: 'Milimani', bio: 'Student mode on. Church on Sundays, fun the rest of the week.', interests: ['Church', 'Reading', 'Cooking'], tribe: 'Luo', distance: 5.1 },
  { id: 4, name: 'Kevin', age: 31, county: 'Nakuru', town: 'Section 58', bio: 'Professional. Love nature and quiet weekends.', interests: ['Nature', 'Photography', 'Running'], tribe: 'Kalenjin', distance: 8.4 },
  { id: 5, name: 'Wanjiku', age: 27, county: 'Kiambu', town: 'Thika', bio: 'Sheng speaking, culture proud. Let\'s vibe.', interests: ['Culture', 'Dancing', 'Food'], tribe: 'Kikuyu', distance: 12 },
];

export default function Discover() {
  const [county, setCounty] = useState('');
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(40);
  const [profiles, setProfiles] = useState(MOCK_PROFILES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('county');
    if (c) setCounty(c);
  }, []);

  const filtered = profiles.filter((p) => {
    if (county && p.county !== county) return false;
    if (p.age < ageMin || p.age > ageMax) return false;
    return true;
  });

  const current = filtered[currentIndex % filtered.length] || null;

  const handleLike = () => {
    if (current) setMatches((m) => [...m, current]);
    setCurrentIndex((i) => i + 1);
  };

  const handlePass = () => {
    setCurrentIndex((i) => i + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-kenya-green">Karibu Mtaani</Link>
          <div className="text-sm text-gray-600">{matches.length} matches</div>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4">
        {/* Filters */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm space-y-3">
          <select
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">All counties</option>
            {COUNTIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <input
              type="number"
              value={ageMin}
              onChange={(e) => setAgeMin(+e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder="Min age"
            />
            <input
              type="number"
              value={ageMax}
              onChange={(e) => setAgeMax(+e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder="Max age"
            />
          </div>
          <p className="text-xs text-gray-500">GPS location matching coming soon (approximate distance only).</p>
        </div>

        {/* Card */}
        {current ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-72 bg-gradient-to-br from-kenya-green to-kenya-red flex items-end p-6 text-white">
              <div>
                <h2 className="text-3xl font-bold">{current.name}, {current.age}</h2>
                <p className="opacity-90">{current.town}, {current.county} • {current.distance} km away</p>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4">{current.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {current.interests.map((i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{i}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">Tribe: {current.tribe}</p>
            </div>
            <div className="flex border-t">
              <button onClick={handlePass} className="flex-1 py-4 text-red-600 font-semibold hover:bg-red-50">
                Pass
              </button>
              <button onClick={handleLike} className="flex-1 py-4 text-kenya-green font-semibold hover:bg-green-50">
                Like
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">No more profiles matching your filters.</div>
        )}

        {matches.length > 0 && (
          <div className="mt-6 bg-white rounded-xl p-4">
            <h3 className="font-semibold mb-2">Your matches</h3>
            {matches.map((m) => (
              <div key={m.id} className="py-2 border-b last:border-0">{m.name} ({m.county})</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
