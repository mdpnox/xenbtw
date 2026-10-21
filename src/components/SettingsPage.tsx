import { Download } from 'lucide-react';

const CONFIG_BUTTON = 'Config';
const CONFIG_LINK = '/xenbtw.cfg';

const BOX =
  'rounded-2xl border-2 border-white bg-black/40 p-6 ' +
  'shadow-[0_0_25px_rgba(255,255,255,0.5),inset_0_0_25px_rgba(255,255,255,0.15)]';

type Item = { label: string; value: string; tone?: 'good' | 'bad' };

const BLOCKS: { title: string; text?: string; note?: string }[] = [
  {
    title: 'Launch Options',
    note: '-noNe',
  },
  {
    title: 'Crosshair',
    note: 'CSDrFfcAZu7DVjEDaBBvWX2kau7k4xpwOYjU5vJ8j8SZGn',
  },
  {
    title: 'Viewmodel',
    text: 'cl_righthand "0"; viewmodel_fov "68"; viewmodel_offset_x "2.5"; viewmodel_offset_y "0"; viewmodel_offset_z "-1.75";',
  },
  {
    title: 'HUD',
    text: 'cl_hud_color 6;cl_showloadout true;safezoneX 1;safezoneY 1',
  },
  {
    title: 'Radar',
    text: 'cl_radar_scale 0.4;cl_radar_always_centered true;cl_radar_rotate true',
  },
];

const MOUSE: Item[] = [
  { label: 'DPI', value: '800' },
  { label: 'Mouse Sensitivity', value: '0.94' },
  { label: 'Zoom Sensitivity Multiplier', value: '1.00' },
  { label: 'Polling rate', value: '1000 Hz' },
];

const VIDEO: Item[] = [
  { label: 'Brightness', value: '93%' },
  { label: 'Scaling mode', value: 'Stretched' },
  { label: 'Aspect Ratio', value: '4:3' },
  { label: 'Resolution', value: '1280x1024' },
  { label: 'Display Mode', value: 'Fullscreen' },
  { label: 'Refresh Rate', value: '260 Hz' },
];

const ADVANCED_LEFT: Item[] = [
  { label: 'Boost Player Contrast', value: 'Enabled', tone: 'good' },
  { label: 'V-Sync', value: 'Disabled', tone: 'bad' },
  { label: 'Multisampling Anti-Aliasing Mode', value: 'None' },
  { label: 'Global Shadow Quality', value: 'Low' },
  { label: 'Model / Texture Detail', value: 'Low' },
  { label: 'Texture Filtering Mode', value: 'Bilinear' },
];

const ADVANCED_RIGHT: Item[] = [
  { label: 'Shader Detail', value: 'Low' },
  { label: 'Particle Detail', value: 'Low' },
  { label: 'Ambient Occlusion', value: 'Disabled' },
  { label: 'High Dynamic Range', value: 'Performance' },
  { label: 'FidelityFX Super Resolution', value: 'Disabled ( Highest Quality )' },
  { label: 'NVIDIA Reflex Low Latency', value: 'Enabled' },
];

const BINDS_TITLE = 'Binds';
const BINDS: { keycap: string; action: string }[] = [
  { keycap: 'q', action: 'slot7' },
  { keycap: 'c', action: 'slot8' },
  { keycap: 'v', action: 'toggle cl_radar_scale 0.4 0.9' },
  { keycap: 'p', action: 'toggle cl_crosshair_length 2 3' },
  { keycap: 'l', action: 'toggle cl_crosshaircolor_r 255 0' },
  { keycap: 'k', action: 'toggle cl_crosshaircolor_b 255 0' },
  { keycap: '/', action: 'sv_rethrow_last_grenade' },
  { keycap: '.', action: 'ent_fire smokegrenade_projectile kill; stopsound' },
  { keycap: 'MOUSE5', action: '+voicerecord' },
  { keycap: 'SPACE', action: '+jump' },
  { keycap: 'MWDOWN', action: '+jump' },
];

type Bind = { keycap: string; action: string };

const BINDS_RIGHT: Bind[] = [
  { keycap: 'F3', action: 'autobuy' },
  { keycap: 'F4', action: 'rebuy' },
  { keycap: '1', action: 'Primary Weapon' },
  { keycap: '2', action: 'Secondary Weapon' },
  { keycap: '3', action: 'Melee Weapons' },
  { keycap: '4', action: 'Cycle Grenades' },
  { keycap: '5', action: 'slot5' },
  { keycap: '`', action: 'Console' },
  { keycap: 'MWUP', action: 'Previous Weapon' },
  { keycap: 'MIDDLEMOUSE', action: 'Player Ping' },
];

// ===== COMPONENT NHỎ: danh sách nhãn (trái) và giá trị (phải) =====
function Rows({ items }: { items: Item[] }) {
  const toneClass = { good: 'text-green-400', bad: 'text-red-400' };
  return (
    <dl className="space-y-1.5 text-sm">
      {items.map(({ label, value, tone }) => (
        <div key={label} className="flex items-start justify-between gap-4">
          <dt className="text-gray-200">{label}</dt>
          <dd className={`text-right ${tone ? toneClass[tone] : 'text-white'}`}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function KeyCap({ children }: { children: string }) {
  return (
    <kbd className="inline-block rounded-md bg-black/60 px-7 py-1 font-mono text-xs font-semibold uppercase text-white">
      {children}
    </kbd>
  );
}

function BindList({ items, keyWidth = 'w-28' }: { items: Bind[]; keyWidth?: string }) {
  return (
    <ul className="space-y-2">
      {items.map(({ keycap, action }) => (
        <li key={keycap} className="flex items-center gap-6">
          <div className={`${keyWidth} shrink-0`}>
            <KeyCap>{keycap}</KeyCap>
          </div>
          <span className="text-sm text-gray-300">{action}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SettingsPage() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-4 py-8">
      <div className="grid items-start gap-7 lg:grid-cols-[1fr_2fr]">
        {/* Box 1: Config */}
        <div className={`${BOX} space-y-3`}>
          <a
            href={CONFIG_LINK}
            download
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white bg-black/40 py-3 font-bold text-white transition-colors hover:bg-white/10"
          >
            <Download size={18} />
            {CONFIG_BUTTON}
          </a>
          {BLOCKS.map(({ title, text, note }) => (
            <div key={title} className="rounded-lg bg-black/40 px-4 py-3 text-xs">
              <p className="font-semibold text-white">{title}</p>
              {text && <p className="mt-0.5 break-words text-gray-300">{text}</p>}
              {note && <p className="mt-0.5 break-words text-gray-300">{note}</p>}
            </div>
          ))}
        </div>

        {/* Box 2: thông số */}
        <div className={`${BOX} space-y-8`}>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-bold text-white">Mouse Settings</h3>
              <Rows items={MOUSE} />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-white">Video Settings</h3>
              <Rows items={VIDEO} />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Advanced Video</h3>
            <div className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
              <Rows items={ADVANCED_LEFT} />
              <Rows items={ADVANCED_RIGHT} />
            </div>
          </div>
        </div>

        {/* Box 3: nằm dưới, trải qua cả hai cột */}
        <div className={`${BOX} lg:col-span-2`}>
          <h3 className="mb-5 text-center text-xl font-bold text-white">{BINDS_TITLE}</h3>

          <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
            <BindList items={BINDS} />
            <BindList items={BINDS_RIGHT} keyWidth="w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}