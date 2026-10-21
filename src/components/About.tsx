import { Download } from 'lucide-react';

type BoxData = {
  title: string;
  content: string;
  download?: { href: string; label: string };
  centered?: boolean; 
  compact?: boolean;
};

const BOXES: BoxData[] = [
  { title: 'Me?', content: 'Just a 20yo gamer who loves Counter Strike and fps games in general. Ah yes i also am a fullstack developer and yes i am miserable and suffering.' },
  { title: 'Why did i make this website?', content: 'Its unemployment. Besides that, i have always wanted to have a cool-ass steam profile but it costs quite an amount of steampoints so i thought to myself that why dont i just make a site to showcase my shit. And as i finished, i dont even want this anymore so the site became a place to save my config. lol' },
  {
    title: 'Background?',
    content: '',
    download: { href: '/serious.mp4', label: 'Download' },
  },
  { title: 'Song?', 
    content: 'Dreams (by 150k) i cant find this song elsewhere ---> twitch.tv/150k',
    download: { href: '/music.mp3', label: 'Download' },
  },
  { title: 'vercel.app?', content: 'I aint paying money for a .com, thats bullshit bro', centered: true, compact: true },
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="grid gap-20 md:grid-cols-2">
        {BOXES.map(({ title, content, download, centered, compact }, index) => {
  const isLastOdd = index === BOXES.length - 1 && BOXES.length % 2 === 1;

  const layout = isLastOdd
    ? `md:col-span-2 md:mx-auto ${compact ? 'md:w-[420px]' : 'md:w-[calc(50%_-_2.5rem)]'}`
    : '';
  const size = compact ? 'min-h-[110px] p-4' : 'min-h-[170px] p-6';

  return (
    <div
      key={title}
      className={`w-full rounded-2xl border-2 border-red-600
        shadow-[0_0_25px_rgba(255,0,40,0.6),inset_0_0_25px_rgba(255,0,40,0.15)]
        ${size} ${layout}`}
    >
      <h4
        className={`text-center font-extrabold tracking-wide text-red-600 ${
          compact ? 'mb-2 text-xl' : 'mb-4 text-2xl'
        }`}
      >
        {title}
      </h4>
      <p className={`text-sm text-white ${centered ? 'text-center' : ''}`}>{content}</p>

      {download && (
        <a
          href={download.href}
          download
          className={`flex w-full items-center justify-center gap-2 rounded-lg border-2 border-red-600 bg-black/40 font-bold text-red-500 transition-colors hover:bg-red-600/20 ${
            compact ? 'mt-3 py-2 text-sm' : 'mt-4 py-3'
          }`}
        >
          <Download size={18} />
          {download.label}
        </a>
      )}
    </div>
  );
})}
      </div>
    </section>
  );
}