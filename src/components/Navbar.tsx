import { Link, NavLink } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex flex-row items-center gap-2 whitespace-nowrap border-b-2 px-1 py-1 text-base font-semibold transition-colors ${
    isActive
      ? 'border-red-500 text-red-500'
      : 'border-transparent text-white hover:text-red-400'
  }`;

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl flex-row items-center gap-6 px-4">
        <Link to="/" className="flex shrink-0 flex-row items-center gap-3">
          <img
            src="/avt.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/80"
          />
          <span className="text-lg font-bold text-white">xen1337_btw</span>
        </Link>

        <div className="ml-auto flex flex-row items-center gap-6">
          <NavLink to="/" end className={linkClass}>
            <span>Home</span>
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <span>Settings</span>
          </NavLink>

          <a
            href="https://csst.at/profile/xenwwwwwww1337"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass({ isActive: false })}
            >
              <span>Css.at</span>
          </a>

          <NavLink to="/about" className={linkClass}>
            <span>About</span>
          </NavLink>

        </div>
      </div>
    </nav>
  );
}