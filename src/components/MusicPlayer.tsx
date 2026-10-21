import { Music, SkipBack, SkipForward, Play, Pause, Volume2 } from 'lucide-react';
import { useMusicPlayer } from '../context/MusicPlayerContext';

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return '0:00';
  return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
};

export default function MusicPlayer() {
  const { title, playing, time, duration, volume, toggle, next, prev, seek, setVolume } =
    useMusicPlayer();

  return (
    <div className="rounded-xl bg-red-950/40 p-4 text-red-400">
      {/* Tên bài + thời gian hiện tại */}
      <div className="flex items-center gap-3">
        <Music size={28} />
        <div>
          <p className="font-bold leading-tight">{title}</p>
          <p className="text-xs">{fmt(time)}</p>
        </div>
      </div>

      {/* Thanh tiến trình */}
      <div className="mt-3 flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={time}
          onChange={(e) => seek(Number(e.target.value))}
          className="h-1 w-full cursor-pointer accent-red-400"
          aria-label="Tiến trình bài hát"
        />
        <span className="text-xs">{fmt(duration)}</span>
      </div>

      {/* Hàng nút */}
      <div className="mt-3 flex items-center gap-4">
        <button onClick={prev} aria-label="Bài trước">
          <SkipBack size={22} fill="currentColor" />
        </button>
        <button onClick={toggle} aria-label={playing ? 'Tạm dừng' : 'Phát'}>
          {playing ? <Pause size={26} fill="currentColor" /> : <Play size={26} fill="currentColor" />}
        </button>
        <button onClick={next} aria-label="Bài tiếp">
          <SkipForward size={22} fill="currentColor" />
        </button>

        <Volume2 size={20} className="ml-2" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 cursor-pointer accent-red-400"
          aria-label="Âm lượng"
        />
      </div>
    </div>
  );
}