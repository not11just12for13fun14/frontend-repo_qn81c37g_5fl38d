import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: '520px' }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/30 to-white" />

      <div className="relative max-w-6xl mx-auto h-full px-4 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Your path to college, simplified
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Explore programs, craft standout essays, and get personalized guidance — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
