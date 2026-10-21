const LINE_1 = 'A wise mind does not waste time fighting the unchangeable.';
const LINE_2 =
  'It accepts what has passed, learns from what remains, and puts its strength into what can still be shaped.';
const AUTHOR = '-UE9-';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 text-sm text-gray-300">
        <p className="text-center">{LINE_1}</p>
        <p className="text-center">{LINE_2}</p>
        <p className="text-center">{AUTHOR}</p>
      </div>
    </footer>
  );
}