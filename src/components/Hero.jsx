import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative mx-auto mt-20 w-full max-w-7xl overflow-hidden rounded-3xl border border-black/10 bg-black shadow-2xl">
      <div className="relative h-[420px] w-full">
        <Spline
          scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            undergraduation.com
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-200 md:text-base">
            A modern college planning platform with an AI advisor, a curated college browser, and an essay builder — designed for high school students.
          </p>
        </div>
      </div>
    </section>
  );
}
