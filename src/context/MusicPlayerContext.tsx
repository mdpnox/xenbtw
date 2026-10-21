import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

const TRACKS = [{ title: 'Dreams (by 150k)', src: '/music.mp3' }];

type MusicPlayerValue = {
  title: string;
  playing: boolean;
  time: number;
  duration: number;
  volume: number;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seek: (t: number) => void;
  setVolume: (v: number) => void;
};

const MusicPlayerContext = createContext<MusicPlayerValue | null>(null);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.15);

  const track = TRACKS[index];

  // Áp dụng âm lượng
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);


  // Đổi bài thì tự phát tiếp nếu đang phát
  useEffect(() => {
    if (playing) audioRef.current?.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
      } catch {
        /* trình duyệt chặn */
      }
    } else {
      a.pause();
    }
  };

  const change = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + TRACKS.length) % TRACKS.length);

  const seek = (t: number) => {
    if (audioRef.current) audioRef.current.currentTime = t;
    setTime(t);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        title: track.title,
        playing,
        time,
        duration,
        volume,
        toggle,
        next: () => change(1),
        prev: () => change(-1),
        seek,
        setVolume,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={track.src}
        loop={TRACKS.length === 1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => change(1)}
      />
    </MusicPlayerContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMusicPlayer() {
  const ctx = useContext(MusicPlayerContext);
  if (!ctx) {
    throw new Error('useMusicPlayer phải được dùng bên trong <MusicPlayerProvider>');
  }
  return ctx;
}