import { useEffect, useRef } from 'react';
import MusicPlayer from './MusicPlayer';
import InfoBox from './InfoBox';

const MAX_TILT = 15;

export default function Hero() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const onMove = (e: MouseEvent) => {
    const el = boxRef.current;
    if (!el) return;
    const px = e.clientX / window.innerWidth - 0.5;
    const py = e.clientY / window.innerHeight - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-py * 2 * MAX_TILT}deg) rotateY(${px * 2 * MAX_TILT}deg)`;
  };

  window.addEventListener('mousemove', onMove, { passive: true });
  return () => window.removeEventListener('mousemove', onMove);
}, []);

  return (
    <section className="grid min-h-[calc(100vh-1rem)] items-center gap-8 px-2 py-8 lg:grid-cols-[1.45fr_1fr] lg:gap-x-32">
      <div
        ref={boxRef}
        className="flex min-h-[420px] w-full flex-col justify-between rounded-2xl border-3 border-red-600 bg-black/40 p-10 backdrop-blur-md lg:aspect-video
            shadow-[0_0_25px_rgba(255,0,40,0.5),inset_0_0_25px_rgba(255,0,40,0.15)]"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src="/avt.jpg"
            alt="Avatar"
            className="h-24 w-24 rounded-full border-2 border-white object-cover
              shadow-[0_0_40px_rgba(255,0,40,0.5),inset_0_0_30px_rgba(255,0,40,0.3)]"
          />
          <h2 className="mt-3 text-3xl font-extrabold text-red-500">xenestaR-</h2>
          <p className="mt-2 flex items-center gap-4 text-base text-red-500">
            <span>xen</span><span>●</span><span>20yo</span>
          </p>
        </div>

        <MusicPlayer />
      </div>
      <div className="px-6">
        <InfoBox />
      </div>
    </section>
  );
}