// Brand mark: an open toolbox with an AI spark rising out of it — "Open AI Tools".
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="oat-g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818cf8" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      {/* Open box (toolbox) */}
      <path d="M8 22l16 7 16-7v14a2 2 0 01-1.2 1.83L24 44l-14.8-6.17A2 2 0 018 36V22z" fill="url(#oat-g)" fillOpacity="0.9" />
      <path d="M8 22l16 7 16-7-6-4-10 4.4L14 18l-6 4z" fill="url(#oat-g)" fillOpacity="0.55" />
      {/* AI spark rising from the open box */}
      <path
        d="M24 2l2.4 6.6L33 11l-6.6 2.4L24 20l-2.4-6.6L15 11l6.6-2.4L24 2z"
        fill="url(#oat-g)"
      />
      <circle cx="34.5" cy="4.5" r="2" fill="#22d3ee" />
      <circle cx="13" cy="6.5" r="1.4" fill="#a78bfa" />
    </svg>
  );
}
