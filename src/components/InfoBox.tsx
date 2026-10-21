const TITLE = 'DREAM PC SPECS';

const INFO = [
  { label: 'CPU', value: 'AMD Ryzen 7 7800x3d' },
  { label: 'GPU', value: 'RTX 4070 Super' },
  { label: 'RAM', value: 'T-force Vulcan Ddr5 x2 16gb 6000mhz' },
  { label: 'MOTHERBOARD', value: 'MSI MAG B650 Tomahawk WiFi' },
  { label: 'COOLER', value: 'Arctic Liquid Freezer III' },
  { label: 'SSD', value: 'Kingston NV3 1TB' },
  { label: 'MOUSE', value: 'PRO X SUPERLIGHT 2 ✓' },
  { label: 'MOUSEPAD', value: 'QcK - Medium ✓' },
  { label: 'MONITOR', value: 'ZOWIE Fast TN 540Hz DyAc™ 2' },
  { label: 'KEYBOARD', value: 'Wooting 60HE+ v2 ✓' },
  { label: 'HEADPHONES', value: 'WLmouse HUAN IEM' },
];

const STATS_TITLE = 'CS2 SETTINGS';

const STATS_ROWS = [
  [
    { value: '800', label: 'DPI' },
    { value: '0.94', label: 'Sensitivity' },
    { value: 'idk', label: 'eDPI' },
    { value: '1.00', label: 'Zoom Sensitivity' },
    { value: '6', label: 'Windows Sensitivity' },
    { value: '1000 Hz', label: 'Polling' },
  ],
  [
    { value: '68', label: 'FOV' },
    { value: '2.5', label: 'Offset X' },
    { value: '0', label: 'Offset Y' },
    { value: '-1.75', label: 'Offset Z' },
    { value: '0', label: 'Presets' },
    { value: '0', label: 'cl_righthand' },
  ],
  [
    { value: '1280x1024', label: 'Resolution' },
    { value: '5:4', label: 'Aspect Ratio' },
    { value: 'STRETCHED', label: 'Scaling Mode' },
    { value: '93%', label: 'Brightness' },
    { value: 'FULLSCREEN', label: 'Display Mode' },
  ],
];

export default function InfoBox() {
  return (
    <div>
      <h4 className="mb-4 text-center text-2xl font-extrabold tracking-wide text-white">
        {TITLE}
      </h4>

      <div
        className="w-full rounded-2xl border-2 border-red-600 p-6
                   shadow-[0_0_25px_rgba(255,0,40,0.6),inset_0_0_25px_rgba(255,0,40,0.15)]"
      >
        {/* Danh sách linh kiện: 2 cột */}
        <dl className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {INFO.map(({ label, value }) => (
            <div key={label} className="flex items-baseline justify-between gap-3 text-xs">
              <dt className="shrink-0 font-semibold text-red-500">{label}</dt>
              <dd className="text-right text-white">{value}</dd>
            </div>
          ))}
        </dl>

        <hr className="my-5 border-white/15" />

        {/* CS2 Settings: mỗi hàng một dòng, ô rộng vừa nội dung */}
        <h4 className="text-base font-bold text-white">{STATS_TITLE}</h4>
        <div className="mt-3 space-y-3">
          {STATS_ROWS.map((row, i) => (
            <div key={i} className="flex flex-wrap gap-x-5 gap-y-2">
              {row.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-sm font-bold leading-tight text-red-500">{value}</p>
                  <p className="text-[11px] leading-tight text-white">{label}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}