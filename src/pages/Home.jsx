import React from 'react';
import RayevaHero from '../components/RayevaHero';

export default function Home({ onSelectCategory }) {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gray-900">
      <RayevaHero onSelectCategory={onSelectCategory} />
    </main>
  );
}
