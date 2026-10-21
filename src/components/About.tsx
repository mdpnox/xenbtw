import { Download } from 'lucide-react';

type BoxData = {
  title: string;
  content: string;
  download?: { href: string; label: string };
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
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="grid gap-20 md:grid-cols-2">
        {BOXES.map(({ title, content, download }) => (
            <div
                key={title}
                className="min-h-[170px] w-full rounded-2xl border-2 border-red-600 p-6
               shadow-[0_0_25px_rgba(255,0,40,0.6),inset_0_0_25px_rgba(255,0,40,0.15)]"
    >
                <h4 className="mb-4 text-center text-2xl font-extrabold tracking-wide text-red-600">
                {title}
                </h4>
                <p className="text-sm text-white">{content}</p>

                {download && (
                <a
                    href={download.href}
                    download
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-red-600 bg-black/40 py-3 font-bold text-red-500 transition-colors hover:bg-red-600/20"
                >
                    <Download size={18} />
                    {download.label}
                </a>
            )}
            </div>
        ))}
      </div>
    </section>
  );
}